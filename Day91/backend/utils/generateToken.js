import jwt from 'jsonwebtoken';

const generateToken = (id) => {
	var token = jwt.sign({ id }, process.env.JWT_SECRET);
	return token;
};

export default generateToken;
