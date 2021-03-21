import express from 'express';
import User from '../models/UserModel.js';
import generateToken from '../utils/generateToken.js';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/users', async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const user = await User.create({
			username,
			email,
			password,
		});

		if (user) {
			res.status(201).json({
				succes: true,
				user: {
					username: user.username,
					email: user.email,
					token: generateToken(user._id),
					active: user.active,
				},
			});
			// create reusable transporter object using the default SMTP transport
			let transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true, // true for 465, false for other ports
				auth: {
					user: 'GMAIL', // generated ethereal user
					pass: 'GMAIL PASSWORD', // generated ethereal password
				},
			});

			// send mail with defined transport object
			const info = await transporter.sendMail({
				from: `${user.username} 👻 <${user.email}>`, // sender address
				to: user.email, // list of receivers
				subject: 'Please confirm your account',
				html: `<h1>Email Confirmation</h1>
                    <h2>Hello ${user.username}</h2>
                    <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                    <a href=http://localhost:5000/api/confirm/${generateToken(user._id)}> Click here</a>
                    </div>`,
			});
		}
	} catch (error) {
		res.status(401).json({ succes: false, message: error.message });
	}
});

router.get('/confirm/:token', async (req, res) => {
	const { token } = req.params;

	var verifyToken = jwt.verify(token, process.env.JWT_SECRET);
	if (verifyToken) {
		await User.findByIdAndUpdate(verifyToken.id, {
			active: true,
		});
		res.status(401).json({ succes: true, message: 'Your account has been activated successfully' });
	} else {
		res.status(201).json({ succes: false, message: 'Invalid Token' });
	}
});

router.delete('/user/:id', async (req, res) => {
	try {
		const { id } = req.params;
		if (id) {
			await User.findByIdAndDelete(id);
			res.status(201).json({ succes: true, user: {} });
		}
	} catch (error) {
		res.status(401).json({ succes: false, message: error.message });
	}
});

export default router;
