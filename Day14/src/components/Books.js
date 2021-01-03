import React, { useState, useEffect } from 'react';

const Books = () => {
	const [books, setBooks] = useState([]);
	const [searchBooks, setSearchBooks] = useState([]);
	const [query, setQuery] = useState('');

	const fetchBooks = async () => {
		try {
			const proxyurl = 'https://cors-anywhere.herokuapp.com/';
			const url = 'https://api.itbook.store/1.0/new';
			const { books } = await fetch(proxyurl + url).then((response) => response.json());
			setBooks(books);
		} catch (error) {
			console.log(error.message);
		}
	};

	const fetchSearchBooks = async () => {
		try {
			const proxyurl = 'https://cors-anywhere.herokuapp.com/';
			const url = `https://api.itbook.store/1.0/search/${query}`;
			const { books } = await fetch(proxyurl + url).then((response) => response.json());
			setSearchBooks(books);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		fetchBooks();

		if (query !== '') {
			fetchSearchBooks();
		}
	}, [query]);

	return (
		<div className="container">
			<div className="search">
				<input
					type="text"
					placeholder="Search for a book"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>

			<div className="grid-books">
				{searchBooks?.length <= 1
					? searchBooks.map((book) => (
							<a href={book.url} target="_blank" className="book" key={book.isbn13}>
								<img src={book.image} />
								<div className="info">
									<h3>{book.title}</h3>
									<span>{book.price}</span>
								</div>
							</a>
					  ))
					: books.map((book) => (
							<a href={book.url} target="_blank" className="book" key={book.isbn13}>
								<img src={book.image} />
								<div className="info">
									<h3>{book.title}</h3>
									<span>{book.price}</span>
								</div>
							</a>
					  ))}
			</div>
		</div>
	);
};

export default Books;
