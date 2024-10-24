// controllers/cartController.js
import asyncHandler from 'express-async-handler';
import Product from '../Models/productModel.js';
import User from '../Models/user.model.js';

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
export const addToCart = asyncHandler(async (req, res) => {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const user = await User.findById(req.user._id);

    const cartItem = user.cart.find(item => item.product.toString() === productId);

    if (cartItem) {
        // If the product is already in the cart, update the quantity
        cartItem.quantity += quantity;
    } else {
        // If it's a new product, add it to the cart
        user.cart.push({ product: productId, quantity });
    }

    await user.save();
    res.status(200).json(user.cart);
});


// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
export const getCart = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).populate('cart.product', 'title price productImage category');

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user.cart);
});


// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
// @access  Private
export const removeFromCart = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    const productId = req.params.id;

    user.cart = user.cart.filter(item => item.product.toString() !== productId);

    await user.save();
    res.status(200).json(user.cart);
    
});
