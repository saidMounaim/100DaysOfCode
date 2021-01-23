import './App.css';
import Header from './components/Header';
import Scoores from './components/Scoores';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<h3>Scoores</h3>
				<Scoores />
			</div>
		</div>
	);
}

export default App;
