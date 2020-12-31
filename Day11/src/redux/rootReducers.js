import { combineReducers } from 'redux';
import { moviesReducers } from './MovieReducers';

const rootReducers = combineReducers({
    movies: moviesReducers
});

export default rootReducers;