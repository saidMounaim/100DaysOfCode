import express from 'express';
import { authUser, createUser, getUsers, deleteUser } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/api/auth', authUser);
router.post('/api/users', authMiddleware, createUser);
router.get('/api/users', getUsers);
router.delete('/api/users/:id', authMiddleware, deleteUser);

export default router;
