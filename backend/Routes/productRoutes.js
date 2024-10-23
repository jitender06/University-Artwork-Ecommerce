import express from 'express';
import { addProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../Controllers/productController.js';
import { admin, protect } from '../Middleware/authMiddleware.js';
import upload from '../Util/fileUpload.js'; // For handling image uploads

const router = express.Router();

// POST /api/products - Add new product (Admin only)
router.post('/products', protect, admin, upload.single('productImage'), addProduct);
router.get('/getproducts', getProducts);
router.get('/getproduct/:id', getProductById);
// Route to update an existing product
router.put('/product/:id', protect, admin, upload.single('productImage'), updateProduct); // Add this line for updating
router.delete('/product/:id', protect, admin, deleteProduct); // Add this line for deleting a product


export default router;
