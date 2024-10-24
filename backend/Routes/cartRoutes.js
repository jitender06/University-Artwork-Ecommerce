// routes/cartRoutes.js
import express from 'express';
import { protect } from '../Middleware/authMiddleware.js'; // Ensure the user is logged in
import { addToCart, getCart, removeFromCart } from '../Controllers/cartController.js';

const router = express.Router();

router.post('/', protect, addToCart); // Add item to cart
router.get('/', protect, getCart); // View user's cart
router.delete('/:id', protect, removeFromCart); // Remove item from cart

export default router;
