import mongoose from 'mongoose';

const UserModel = mongoose.Schema({
	fullName: {
		type: String,
	},
	mail: {
		type: String,
	},
	genre: {
		type: String,
	},
});

const User = mongoose.model('User', UserModel);

export default User;
