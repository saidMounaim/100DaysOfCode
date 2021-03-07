import express from 'express';
import { getBooks, createBook, updateBook, deleteBook } from '../controllers/bookController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/api/books', getBooks);
router.post('/api/books', authMiddleware, createBook);
router.put('/api/books/:id', authMiddleware, updateBook);
router.delete('/api/books/:id', deleteBook);

export default router;
