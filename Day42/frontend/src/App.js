import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/create" component={CreatePage} />
					<Route path="/edit/:id" component={EditPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
