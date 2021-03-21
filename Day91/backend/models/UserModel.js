import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	token: {
		type: String,
	},
	active: {
		type: Boolean,
		required: true,
		default: false,
	},
});

const User = mongoose.model('User', UserSchema);

export default User;
