import { combineReducers } from 'redux';
import { TodoReducres } from './TodoReducers';

export const rootReducer = combineReducers({
	todo: TodoReducres,
});
