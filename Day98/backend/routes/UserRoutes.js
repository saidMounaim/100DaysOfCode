import express from 'express';
import User from '../models/UserModel.js';
import generateToken from '../utils/generateToken.js';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

//@DESC Get All Usres
//@ROUTE /api/users
//@METHOD GET
router.get('/users', async (req, res) => {
	try {
		const users = await User.find({});
		res.status(201).json({ success: true, count: users.length, data: users });
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
});

//@DESC Create User
//@ROUTE /api/users
//@METHOD POST
router.post('/users', async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const user = await User.create({ username, email, password });
		res.status(201).json({
			success: true,
			data: {
				id: user._id,
				usename: user.username,
				email: user.email,
				token: generateToken(user._id),
			},
		});
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
});

//@DESC Delete User
//@ROUTE /api/user/:id
//@METHOD DELETE
router.delete('/user/:id', async (req, res) => {
	try {
		const { id } = req.params;
		if (id) {
			await User.findByIdAndDelete(id);
			res.status(201).json({ success: true, user: {} });
		}
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
});

//@DESC Forgot Password
//@ROUTE /api/users/password/forgot
//@METHOD POST
router.post('/users/password/forgot', async (req, res) => {
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });
		if (user) {
			let transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true, // true for 465, false for other ports
				auth: {
					user: 'SMTP USERNAME', // generated ethereal user
					pass: 'SMPT PASSWORD', // generated ethereal password
				},
			});

			// send mail with defined transport object
			const info = await transporter.sendMail({
				from: `${user.username} 👻 <${user.email}>`, // sender address
				to: user.email, // list of receivers
				subject: 'Forgot Password',
				html: `<h2>Hello ${user.username}</h2>
                    <p>Password Reset Request</p>
                    <a href=http://localhost:5000/api/reset/password/${generateToken(user._id)}> Click here</a>
                    </div>`,
			});
			res.status(401).json({ success: true, message: 'Check Your Email' });
		} else {
			res.status(401).json({ success: false, message: 'User does not exist' });
		}
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
});

//@DESC Reset Password
//@ROUTE /api/reset/password/:token
//@METHOD POST
router.get('/reset/password/:token', async (req, res) => {
	try {
		const { token } = req.params;
		if (token) {
			const verified = jwt.verify(token, process.env.JWT_SECURE);
			if (verified) {
				const { newPassword, confirmPassword } = req.body;
				const user = await User.findById(verified.id);
				if (newPassword === confirmPassword) {
					const hash = bcrypt.hashSync(newPassword, 10);
					await User.updateOne({ _id: user._id }, { $set: { password: hash } }, { new: true });
					res.status(201).json({ success: true, message: 'Password changed successfully' });
				} else {
					res.status(401).json({ success: false, message: 'Confirm password does not match' });
				}
			} else {
				res.status(401).json({ success: false, message: 'Invalid token' });
			}
		} else {
			res.status(401).json({ success: false, message: 'Token not found' });
		}
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
});

export default router;
