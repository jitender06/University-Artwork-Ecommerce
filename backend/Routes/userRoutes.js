import express from 'express';
import { getUser } from '../Controllers/userController.js';
import { admin, protect } from '../Middleware/authMiddleware.js';

const router = express.Router();

// POST /api/products - Add new product (Admin only)
router.get('/getUser',protect, admin, getUser);

export default router;
    