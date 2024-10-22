import express from 'express';
import connectDB from './Util/connnection.js';
import cors from 'cors';
import passport from 'passport';
import authRoutes from './Routes/auth.js';
import './Config/passport.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
// CORS Configuration

connectDB();
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Adjust methods as needed
    credentials: true, // If you need to allow cookies
};


app.use(cors(corsOptions)); // Use CORS with options

app.use(express.json());

app.use(passport.initialize());

app.use('/auth', authRoutes);


app.listen(8000, () => {
    console.log(`Server Run on http://localhost:8000/`);
})