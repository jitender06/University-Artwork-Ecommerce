import Product from '../Models/productModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Add new product
// @route   POST /api/products
// @access  Private/Admin
export const addProduct = async (req, res) => {
  const { title, description, status, price } = req.body;
  console.log(req.body)
  const productImage = req.file ? req.file : null;

  try {
    if (!title || !description || !price || !productImage) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product({
      title,
      description,
      productImage,
      status,
      price,
      // createdBy: req.user._id, // Assuming req.user contains authenticated admin's info
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export const updateProduct = asyncHandler(async (req, res) => {
  const { title, description, status, price, category } = req.body;
  const productImage = req.file ? req.file.path : null; // For image uploads

  try {
    // Find the product by ID
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update the product fields
    product.title = title || product.title;
    product.description = description || product.description;
    product.status = status || product.status;
    product.price = price || product.price;
    product.category = category || product.category;
    if (productImage) {
      product.productImage = productImage; // Update the product image if provided
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});



export const getProducts = async(req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
}

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});


// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private (Admin only)
export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    // Find the product by ID
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Remove the product
    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: 'Product removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});