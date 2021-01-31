import express from 'express';
import User from '../models/UserModel.js';

const router = express.Router();

// @METHOD: GET
// @ROUTE: /api/users
// @DESC: Get all users
router.get('/users', async (req, res) => {
	try {
		const users = await User.find({});
		res.json(users);
	} catch (error) {
		res.json({ message: error.message });
	}
});

// @METHOD: POST
// @ROUTE: /api/users
// @DESC: Create a new user
router.post('/users', async (req, res) => {
	const { fullName, mail, genre } = req.body;
	const user = new User({
		fullName,
		mail,
		genre,
	});
	try {
		const savedUser = await user.save();
		res.status(201).json(savedUser);
	} catch (error) {
		res.json({ message: error.message });
	}
});

// @METHOD: GET
// @ROUTE: /api/user/:id
// @DESC Find one use by id
router.get('/user/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		if (user) {
			res.status(201).json(user);
		}
	} catch (error) {
		res.json({ message: error.message });
	}
});

// @METHOD: PUT
// @ROUTE: /api/user/:id
// @DESC: Update User
router.put('/user/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);

		if (user) {
			user.fullName = req.body.fullName || user.fullName;
			user.mail = req.body.mail || user.mail;
			user.genre = req.body.genre || user.genre;

			const updatedUser = await user.save();
			res.status(201).json(updatedUser);
		}
	} catch (error) {
		res.json({ message: error.message });
	}
});

// @METHOD: DELETE
// @ROUTE: /api/user/:id
// @DESC: Delete user by id
router.delete('/user/:id', async (req, res) => {
	try {
		const { id } = req.params;
		await User.findByIdAndDelete(id);
		res.status(201).json({ message: 'Delete User Successfully' });
	} catch (error) {
		res.json({ message: error.message });
	}
});

export default router;
