import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Product title is required'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
    },
    productImage: {
      type: Object,
      required: [true, 'Product image is required'],
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    category:{
      type: String,
      enum: ['painting', 'digitalart', 'drawing', 'sculpture'],
      default: 'painting',

    }
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User', // Reference to the admin who created the product
    //   required: true,
    // },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
