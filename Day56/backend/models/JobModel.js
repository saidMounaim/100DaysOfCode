import mongoose from 'mongoose';
import slugify from 'slugify';

const JobSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		max: 200,
		unique: true,
	},
	slug: String,
	description: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	salary: {
		type: Number,
		require: true,
	},
	email: {
		type: String,
		required: true,
		match: [
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		],
	},
});

// Create slug by title
JobSchema.pre('save', function (next) {
	this.slug = slugify(this.title, { lower: true });
	next();
});

const Job = mongoose.model('Job', JobSchema);

export default Job;
