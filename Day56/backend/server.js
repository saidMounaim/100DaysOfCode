import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import jobRoutes from './routes/jobRoutes.js';

const app = express();

dotenv.config();

connectDB();

app.use(express.json());

// Job Router
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on ${PORT} PORT`));
