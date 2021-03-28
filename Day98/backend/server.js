import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import UserRoutes from './routes/UserRoutes.js';

const app = express();

dotenv.config();

connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.status(201).json({ success: true, message: 'Hello World!' });
});

app.use('/api', UserRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
