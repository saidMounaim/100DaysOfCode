import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
