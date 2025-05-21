import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Razorpay from 'razorpay';
import userRoutes from './routes/UserRoute.js';
import productRoutes from './routes/ProductRoutes.js';
import orderRoutes from './routes/OrderRoutes.js';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

// Enable __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// Middleware
app.use(cors());

// Use express.json() ONLY (no need for bodyParser.json() since express has it built-in now)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., HTML success page)
app.use(express.static(path.join(__dirname, 'public'))); // Make sure /public/success.html exists

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET_ID,
});

// File read/write helpers
const readData = () => {
  if (fs.existsSync('orders.json')) {
    const data = fs.readFileSync('orders.json', 'utf-8');
    return JSON.parse(data);
  }
  return [];
};

const writeData = (data) => {
  fs.writeFileSync('orders.json', JSON.stringify(data, null, 2));
};

// Initialize orders.json if not exists
if (!fs.existsSync('orders.json')) {
  writeData([]);
}

// 🧾 Create Razorpay Order
app.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;
    console.log('Received amount:', amount);

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    const parsedAmount = Math.floor(Number(amount)); // Ensure integer

    const options = {
      amount: parsedAmount * 100, // paise
      currency: 'INR',
      receipt: 'receipt#' + Math.floor(Math.random() * 1000000),
    };

    const order = await razorpay.orders.create(options);

    // Save locally
    const orders = readData();
    orders.push({
      order_id: order.id,
      amount: parsedAmount,
      status: 'created',
    });
    writeData(orders);

    return res.json(order);
  } catch (err) {
    console.error('❌ Error in /create-order:', err.message);
    return res.status(500).json({ error: 'Error creating order' });
  }
});


// ✅ Verify Payment
app.post('/verify-payment', (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ status: 'error', message: 'Missing payment verification parameters' });
    }

    const secret = razorpay.key_secret;
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex');

    const orders = readData();
    const order = orders.find((o) => o.order_id === razorpay_order_id);

    if (!order) {
      return res.status(404).json({ status: 'error', message: 'Order not found' });
    }

    if (expectedSignature === razorpay_signature) {
      order.status = 'paid';
      order.payment_id = razorpay_payment_id;
      console.log('✅ Payment verified successfully');
    } else {
      order.status = 'failed';
      order.payment_id = razorpay_payment_id;
      console.log('❌ Payment verification failed - invalid signature');
    }

    writeData(orders); // Save updated order status
    return res.status(200).json({ status: order.status });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Error verifying payment' });
  }
});

// Optional success page route
app.get('/payment-success', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
