import { useEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';
import Portfolio from './components/Portfolio';

function App() {
	useEffect(() => {
		const loading = document.querySelector('.loading');
		const portfolio = document.querySelector('.portfolio');
		gsap.to(loading, 2, { left: '-100%', ease: 'Power2.easeOut' });
		gsap.to(portfolio, 0.7, { opacity: 1, delay: 1.5 });
		gsap.to('.leftSide h1', 0.8, { transform: 'translateY(0)', ease: 'Power2.easeOut', delay: 1.5 });
		gsap.to('.social-media li', 1, { opacity: 1, left: 0, ease: 'Power2.easeOut', stagger: 0.1, delay: 2 });
		gsap.to('.rightSide img', 1, { opacity: 1, left: 0, ease: 'Power2.easeOut', delay: 1.7 });
	}, []);

	return (
		<>
			<div className="loading"></div>
			<div className="App">
				<Portfolio />
			</div>
		</>
	);
}

export default App;
