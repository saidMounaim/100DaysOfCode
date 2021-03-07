import asyncHandler from 'express-async-handler';
import path from 'path';
import Book from '../models/bookModel.js';

const __dirname = (() => {
	let x = path.dirname(decodeURI(new URL(import.meta.url).pathname));
	return path.resolve(process.platform == 'win32' ? x.substr(1) : x);
})();

// @DESC Get All Books
// @METHOD GET
// @ROUTE /api/books
const getBooks = asyncHandler(async (req, res) => {
	const books = await Book.find({});
	res.status(200).json({ success: true, data: books });
});

// @DESC Create a new book
// @METHOD POST
// @ROUTE /api/books
const createBook = asyncHandler(async (req, res) => {
	const { name, description } = req.body;
	let coverFile;
	if (req.files) {
		coverFile = req.files.cover.name;
		let uploadPath = __dirname + '\\..\\uploads\\' + req.files.cover.name;
		req.files.cover.mv(uploadPath);
	}

	if (name && description) {
		const saveBook = await Book.create({
			name,
			description,
			cover: coverFile,
		});
		await saveBook.save();
		res.status(200).json({ success: true, message: 'Succesfully!' });
	}
});

// @DESC Update a book
// @METHOD PUT
// @ROUTE /api/books/:id
const updateBook = asyncHandler(async (req, res) => {
	const { id } = req.params;
	if (id) {
		const book = await Book.findById(id);
		const { name, description } = req.body;

		let coverFile;
		if (!req.files) {
			coverFile = book.cover;
		} else {
			coverFile = req.files.cover.name;
			let uploadPath = __dirname + '\\..\\uploads\\' + req.files.cover.name;
			req.files.cover.mv(uploadPath);
		}

		await Book.findByIdAndUpdate(
			id,
			{ name, description, cover: coverFile },
			{
				new: true,
				runValidators: true,
			}
		);

		res.status(201).json({ success: true, message: 'Updated Successfully' });
	}
});

// @DESC Delete a book
// @METHOD DELETE
// @ROUTE /api/books/:id
const deleteBook = asyncHandler(async (req, res) => {
	const { id } = req.params;
	if (id) {
		await Book.findByIdAndDelete(id);
		res.status(201).json({ success: true, message: 'Deleted Successfully' });
	}
});

export { getBooks, createBook, updateBook, deleteBook };
