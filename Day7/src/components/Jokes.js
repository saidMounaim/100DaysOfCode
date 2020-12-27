import React, { useEffect, useState } from 'react';

const Jokes = () => {
	const [jokes, setJokes] = useState({});
	const [loading, setLoading] = useState(true);

	const fetchJokes = async () => {
		const data = await fetch('https://api.chucknorris.io/jokes/random').then((response) => response.json());
		if (data) {
			setLoading(false);
			setJokes(data);
		}
	};

	const getNewJoke = () => {
		fetchJokes();
	};

	useEffect(() => {
		fetchJokes();
	}, []);

	return (
		<div className="jokes">
			<div className="card">
				<p>
					{loading ? (
						<h2>Loading ...</h2>
					) : (
						<>
							{jokes?.value}
							<img src={jokes?.icon_url} />
						</>
					)}
				</p>
			</div>
			<button onClick={getNewJoke}>Get new joke 😂</button>
		</div>
	);
};

export default Jokes;
