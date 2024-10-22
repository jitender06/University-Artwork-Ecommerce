import express from 'express';
import connectDB from './Util/connnection.js';
import cors from 'cors';
import authRouter from './Routes/authRouter.js';
import postRoutes from './Routes/postRoutes.js';


const app = express();
app.use(express.json());
connectDB();
app.use(cors());


app.use('/api/auth', authRouter);
app.use('/post', postRoutes)

app.listen(8000, () => {
    console.log(`Server Run on http://localhost:8000/`);
})