import styled from 'styled-components';
import Head from 'next/head';

const DetailsGame = ({ game }) => {
	return (
		<>
			<Head>
				<title> Game Info : {game.name}</title>
			</Head>
			<div className="container">
				<GameDetailsStyled>
					<h1>{game.name}</h1>
					<span>released : {game.released}</span>
					<video className="videoGame" controls>
						<source src={game.clip.clip} type="video/mp4"></source>
					</video>
					<div className="content">
						<p>{game.description_raw}</p>
					</div>
				</GameDetailsStyled>
			</div>
		</>
	);
};

const GameDetailsStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	padding-bottom: 90px;
	h1 {
		font-size: 35px;
		color: #2d3436;
	}
	span {
		display: block;
		font-size: 19px;
		margin-top: 15px;
	}
	.videoGame {
		width: 50%;
		height: 50vh;
		object-fit: cover;
		display: flex;
		flex-direction: column;
		margin: auto;
		margin-top: 40px;
	}
	.content {
		display: flex;
		flex-direction: column;
		margin-top: 40px;
		p {
			font-size: 16px;
			line-height: 25px;
			font-weight: 400;
		}
	}
`;

export const getServerSideProps = async (context) => {
	const { id } = context.query;
	if (id) {
		const apiUrl = process.env.apiUrl;
		const res = await fetch(`${apiUrl}games/${id}`);
		const data = await res.json();

		return {
			props: {
				game: data,
			},
		};
	}
};

export default DetailsGame;
