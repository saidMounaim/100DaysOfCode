import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Games = ({ games }) => {
	const [query, setQuery] = useState('');
	const router = useRouter();

	const handledSubmit = (e) => {
		e.preventDefault();
		if (query !== '') {
			router.push({
				pathname: '/search',
				query: { query },
			});
		}
	};

	return (
		<GamesStyled>
			<div className="header">
				<h1>Latest Games</h1>
				<form onSubmit={handledSubmit}>
					<input
						type="text"
						name="query"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search for a game"
						required
					/>
				</form>
			</div>

			<div className="games-grid">
				{games.map((game) => (
					<Link href={`/${game.id}`} key={game.id}>
						<a className="game">
							<img src={game.background_image} alt="game" />
							<div className="info">
								<h4>{game.name}</h4>
								<span>released : {game.released}</span>
							</div>
						</a>
					</Link>
				))}
			</div>
		</GamesStyled>
	);
};

const GamesStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	padding-bottom: 80px;
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		h1 {
			font-size: 30px;
			color: #2d3436;
			font-weight: bold;
		}
		input {
			background: #fff;
			padding: 15px 15px;
			border-radius: 29px;
			font-size: 16px;
			&::placeholder {
				color: #2d3436;
				font-family: inherit;
			}
		}
	}
	.games-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 15px;
		margin-top: 40px;
		.game {
			background: white;
			padding: 11px 14px;
			border-radius: 7px;
			img {
				width: 100%;
				height: 220px;
				object-fit: cover;
			}
			.info {
				display: flex;
				flex-direction: column;
				color: #2d3436;
				span {
					display: block;
					font-size: 15px;
					font-weight: 600;
				}
				h4 {
					font-size: 20px;
					line-height: 30px;
					margin: 10px 0px;
				}
			}
		}
	}
`;

export default Games;
