import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

router.get('/posts', async (req, res) => {
	try {
		let query;

		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;
		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const totalPosts = await Post.countDocuments();

		query = await Post.find({}).skip(startIndex).limit(limit);

		let paginations = {};

		if (endIndex < totalPosts) {
			paginations.next = {
				next: page + 1,
				limit,
			};
		}

		if (startIndex > 0) {
			paginations.prev = {
				prev: page - 1,
				limit,
			};
		}

		const allPosts = await query;

		res.status(201).json({ success: true, paginations, count: allPosts.length, data: allPosts });
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
});

router.post('/posts', async (req, res) => {
	try {
		const post = await Post.create(req.body);
		res.status(201).json({ success: true, data: post });
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
});

router.delete('/post/:id', async (req, res) => {
	try {
		await Post.findByIdAndDelete(req.params.id);
		res.status(201).json({ success: true, data: {} });
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
});

export default router;
