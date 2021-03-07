import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcrypt';

// @DESC Get All Users
// @METHOD GET
// @ROUTE /api/users
const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.status(200).json({ success: true, data: users });
});

// @DESC Auth User
// @METHOD POST
// @ROUTE /api/auth
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });

	if (user) {
		const validPass = bcrypt.compare(password, user.password);
		if (validPass) {
			const token = generateToken(user._id);
			res.status(200).json({ success: true, token });
			req.header('Auth-Token', token).send(token);
		}
	}

	console.log(user);
});

// @DESC Create a new user
// @METHOD POST
// @ROUTE /api/user
const createUser = asyncHandler(async (req, res) => {
	const { fullName, email, password } = req.body;
	const userExist = await User.findOne({ email });
	if (!userExist) {
		await User.create({ fullName, email, password });
		res.status(200).json({ success: true, message: 'Created Successfuly' });
	}
});

// @DESC Delete a user
// @METHOD DELETE
// @ROUTE /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
	const { id } = req.params;
	if (id) {
		await User.findByIdAndDelete(id);
		res.status(201).json({ success: true, message: 'Deleted Successfully' });
	}
});

export { authUser, createUser, getUsers, deleteUser };
