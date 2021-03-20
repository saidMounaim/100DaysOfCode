import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';

const app = express();

dotenv.config();

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
	res.status(201).json({ success: true, message: 'Hello World' });
});

app.use('/api', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT} PORT`));
