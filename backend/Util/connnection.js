import mongoose from "mongoose";
import dotenv from 'dotenv';

const connectDB = async () => {
    dotenv.config();
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;