import express from 'express';
import connectDB from './Util/connnection.js';
import cors from 'cors';
import passport from 'passport';
import authRoutes from './Routes/auth.js';
import './Config/passport.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import productRoutes from './Routes/productRoutes.js'
import userRoutes from './Routes/userRoutes.js'
import cartRoutes from './Routes/cartRoutes.js';


dotenv.config();

const app = express();
// CORS Configuration

connectDB();
const corsOptions = {
    origin: 'https://allahabad-university.netlify.app', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Adjust methods as needed
    credentials: true, // If you need to allow cookies
};


app.use(cors(corsOptions)); // Use CORS with options

app.use(express.json());

app.use(passport.initialize());

app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));
app.use('/api', productRoutes);
app.use('/user', userRoutes);
app.use('/api/cart', cartRoutes);

app.use('/auth', authRoutes);


app.listen(8000, () => {
    console.log(`Server Run on https://university-artwork-ecommerce.onrender.com/`);
})