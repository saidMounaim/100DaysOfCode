import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// SETUP REDUX
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

const initialState = {
	todo: {
		todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
	},
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
