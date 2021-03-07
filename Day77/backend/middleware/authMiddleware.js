import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
	const token = req.header('Auth-Token');

	if (!token) {
		res.status(401).json({ success: false, message: 'auth failed' });
	}

	try {
		const validToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
		req.user = validToken;
		next();
	} catch (error) {
		res.status(401).json({ success: false, message: 'invalid token' });
	}
};

export default authMiddleware;
