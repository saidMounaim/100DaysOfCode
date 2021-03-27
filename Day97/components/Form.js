import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Form = () => {
	const [query, setQuery] = useState('');
	const router = useRouter();

	const handleSearch = (e) => {
		e.preventDefault();
		if (query !== '') {
			router.push({
				pathname: '/search',
				query: { location: query },
			});
		}
	};

	return (
		<div className={styles.formWeather}>
			<h2>Weather App</h2>
			<div>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search for location"
				/>
				<button onClick={handleSearch}>Search</button>
			</div>
		</div>
	);
};

export default Form;
