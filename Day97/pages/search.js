import Form from '../components/Form';
import styles from '../styles/Home.module.css';
import { withRouter } from 'next/router';

function Search({ data }) {
	function KtoC(K) {
		return Math.floor(K - 273.15);
	}

	return (
		<div className={styles.container}>
			<Form />
			{data.name ? (
				<>
					<h2>{data.name}</h2>
					<div className={styles.weather}>
						<div className="img">
							<img
								src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
								alt="Icon Weather"
							/>
						</div>
						<div className="info">
							<h2>{KtoC(data.main.temp)}°C</h2>
						</div>
					</div>
				</>
			) : (
				<h1>{data.message}</h1>
			)}
		</div>
	);
}

export async function getServerSideProps({ query }) {
	const { API_URL } = process.env;
	const { API_KEY } = process.env;
	const res = await fetch(`${API_URL}?q=${query.location}&appid=${API_KEY}`);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}

export default withRouter(Search);
