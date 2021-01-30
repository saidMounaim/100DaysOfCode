import * as actions from './TodoConstants';
import swal from 'sweetalert';

export const AddTodo = (todo) => async (dispatch) => {
	try {
		dispatch({ type: actions.ADD_TODO, payload: todo });
	} catch (error) {
		console.log(error.message);
	}
};

export const DeleteTodo = (id) => (dispatch, getState) => {
	try {
		const { todo } = getState();
		const todos = todo.todos;
		const filtredTodos = todos.filter((todo, index) => index !== id);
		swal({
			title: 'Are you sure?',
			text: 'Once deleted, you will not be able to recover this todo!',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				dispatch({ type: actions.DELETE_TODO, payload: filtredTodos });
				swal('Poof! Your todo has been deleted!', {
					icon: 'success',
				});
				localStorage.setItem('todos', JSON.stringify(filtredTodos));
			} else {
				swal('Your todo is safe!');
			}
		});
	} catch (error) {
		console.log(error.message);
	}
};
