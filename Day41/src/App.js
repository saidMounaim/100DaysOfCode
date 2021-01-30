import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Header />
			<div className="container">
				<TodoForm />
				<TodoList />
			</div>
		</div>
	);
}

export default App;
