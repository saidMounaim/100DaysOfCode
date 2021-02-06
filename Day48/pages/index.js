import Games from '../components/Games';
import fetch from 'isomorphic-fetch';

export default function Home({ games }) {
	return (
		<div className="container">
			<Games games={games.results} />
		</div>
	);
}

// get current moth
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

// get current day
const getCurrentDay = () => {
	const day = new Date().getDay();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

// get current year
const currentYear = new Date().getFullYear();
const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const new_games = `games?dates=${lastYear},${currentDate}&oredring=-released`;

export const getServerSideProps = async () => {
	const apiUrl = process.env.apiUrl;
	const res = await fetch(`${apiUrl}${new_games}`);
	const data = await res.json();

	return {
		props: {
			games: data,
		},
	};
};
