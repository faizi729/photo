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
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML success page)
app.use(express.static(path.join(__dirname, 'public'))); // You can serve success.html from /public

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET_ID,
});

// File read/write helpers
const readData = () => {
  if (fs.existsSync('orders.json')) {
    const data = fs.readFileSync('orders.json');
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
    const { amount, currency = 'INR', notes } = req.body;

    const receipt = 'rcpt_' + Date.now(); // ✅ Ensure unique receipt

    const options = {
      amount: parseInt(amount) * 100, // Razorpay uses paise
      currency,
      receipt,
      notes,
    };

    const order = await razorpay.orders.create(options);

    const orders = readData();
    orders.push({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      status: 'created',
    });
    writeData(orders);

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating order');
  }
});

// ✅ Verify Payment
app.post('/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const secret = razorpay.key_secret;
  const body = `${razorpay_order_id}|${razorpay_payment_id}`;

  try {
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(body)
      .digest('hex');

    const orders = readData();
    const order = orders.find(o => o.order_id === razorpay_order_id);

    if (!order) {
      return res.status(404).json({ status: 'error', message: 'Order not found' });
    }

    if (expectedSignature === razorpay_signature) {
      if(order.status = 'paid'){
        window.location.href = "/success.html"
      }
      order.payment_id = razorpay_payment_id;
      console.log("✅ Payment verified successfully");
    } else {
      order.status = 'failed';
      order.payment_id = razorpay_payment_id;
      console.log("❌ Payment verification failed - invalid signature");
    }

    writeData(orders); // ⬅️ Always update the file
    res.status(200).json({ status: order.status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Error verifying payment' });
  }
  
});


// ✅ Optional Success Page Route
app.get('/payment-success', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/success.html')); // Make sure success.html exists
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
