import jwt from 'jsonwebtoken';

const generateToken = (id) => {
	try {
		const token = jwt.sign({ id }, process.env.JWT_SECURE);
		return token;
	} catch (error) {
		console.log(error.message);
	}
};

export default generateToken;
