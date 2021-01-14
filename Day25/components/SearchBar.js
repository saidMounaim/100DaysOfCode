import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const SearchBar = () => {
	const [query, setQuery] = useState('');
	const router = useRouter();

	const handleSearch = (e) => {
		e.preventDefault();
		if (query !== '') {
			router.push(`/search?q=${query}`);
		}
	};

	return (
		<SearchStyled>
			<input
				type="text"
				onChange={(e) => setQuery(e.target.value)}
				value={query}
				placeholder="Search for keyword"
			/>
			<button onClick={handleSearch}>Search</button>
		</SearchStyled>
	);
};

const SearchStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 90px;
	input {
		width: 45%;
		padding: 15px 15px;
		background: white;
		font-size: 16px;
		color: black;
		&:placeholder {
			color: black;
		}
	}
	@media screen and (max-width: 768px) {
		input,
		button {
			width: 85%;
		}
	}
	button {
		font-family: inherit;
		display: flex;
		flex-direction: column;
		background: antiquewhite;
		background: #ebb34b;
		outline: none;
		border: none;
		margin-top: 25px;
		width: 45%;
		text-align: center;
		justify-content: center;
		align-items: center;
		padding: 10px 15px;
		font-size: 17px;
		color: white;
		cursor: pointer;
	}
`;

export default SearchBar;
