import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = mongoose.Schema({
	fullName: {
		type: String,
		required: true,
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
});

UserSchema.pre('save', function (next) {
	const password = this.password;
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);

	this.password = hash;

	next();
});

const User = mongoose.model('User', UserSchema);

export default User;
