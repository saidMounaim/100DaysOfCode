import jwt from 'jsonwebtoken';

const generateToken = (id) => {
	if (id) {
		const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY);
		return token;
	}
};

export default generateToken;
