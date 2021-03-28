import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
});

UserSchema.pre('save', function (next) {
	const hash = bcrypt.hashSync(this.password, 10);
	this.password = hash;
	next();
});

const User = mongoose.model('User', UserSchema);

export default User;
