import express from 'express';
import {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus
} from '../controllers/OrderController.js';

const router = express.Router();

// Create a new order
router.post('/', createOrder);

// Get all orders for a specific user
router.get('/user/:userId', getUserOrders);

// Admin: Get all orders
router.get('/', getAllOrders);

// Admin: Update order status
router.put('/:orderId', updateOrderStatus);

export default router;
