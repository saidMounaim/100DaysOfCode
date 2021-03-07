import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import fileUpload from 'express-fileupload';

// Routes
import bookRoutes from './routes/bookRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

dotenv.config();

app.use(express.static('uploads'));
app.use(fileUpload());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
	res.status(200).json({ success: true, message: 'Welcome To Book Store API' });
});

// Books Routes
app.use('/', bookRoutes);
app.use('/', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
