import mongoose from 'mongoose';

const BookSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	cover: {
		type: String,
	},
});

const Book = mongoose.model('Book', BookSchema);

export default Book;
