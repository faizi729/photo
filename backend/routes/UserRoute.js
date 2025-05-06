import express from 'express';
import {
  registerUser,
  loginUser,
  getAllUsers
} from '../controllers/UserContoller.js';

const router = express.Router();

// Register
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

// Admin: Get all users
router.get('/', getAllUsers);

export default router;
