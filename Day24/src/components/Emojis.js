import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const Emojis = () => {
	const [allEmojis, setAllEmojis] = useState([]);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState('');

	const fetchEmojis = async () => {
		const res = await fetch(
			`https://emoji-api.com/emojis?search=${query}&access_key=52ab583bcd1b175d5aab0b259c0ecbc81d42abcc`
		);
		const data = await res.json();
		setAllEmojis(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchEmojis();
	}, [query]);

	return (
		<div className="emojis">
			<div className="search">
				<input placeholder="Search for keyword" value={query} onChange={(e) => setQuery(e.target.value)} />
			</div>

			<div className="grid-emojis">
				{loading === true ? (
					<Loader />
				) : (
					allEmojis?.slice(0, 9).map((emoji) => (
						<div className="item" key={emoji.title}>
							<span>{emoji.character}</span>
						</div>
					))
				)}

				{allEmojis === null && <h1>No Emoji Found</h1>}
			</div>
		</div>
	);
};

export default Emojis;
