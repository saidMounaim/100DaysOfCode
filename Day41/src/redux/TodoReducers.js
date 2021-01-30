import * as actions from './TodoConstants';

export const TodoReducres = (state = { todos: [] }, action) => {
	switch (action.type) {
		case actions.FETCH_TODO:
			return {
				...state,
				todos: action.payload,
			};
		case actions.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case actions.DELETE_TODO:
			return {
				...state,
				todos: action.payload,
			};
		default:
			return state;
	}
};
