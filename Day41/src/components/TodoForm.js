import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AddTodo } from '../redux/TodoActions';

const TodoForm = () => {
	const dispatch = useDispatch();
	const { todos } = useSelector((state) => state.todo);
	const [todo, setTodo] = useState({ name: '', isDone: false });

	const handleChange = (e) => setTodo({ name: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todo.name !== '') {
			dispatch(AddTodo(todo));
			localStorage.setItem('todos', JSON.stringify([...todos, todo]));
			setTodo({ name: '' });
		}
	};

	return (
		<TodoFormStyled>
			<form onSubmit={handleSubmit}>
				<label htmlFor="todo">Todo</label>
				<input type="text" placeholder="Add Todo" value={todo.name} onChange={handleChange} />
			</form>
		</TodoFormStyled>
	);
};

const TodoFormStyled = styled.div`
	width: 100%;
	margin: 60px 0;
	display: flex;
	flex-direction: column;
	form {
		width: 100%;
	}
	label {
		font-size: 30px;
		color: #f5556b;
		font-weight: 400;
		margin-bottom: 15px;
		display: flex;
	}
	input {
		width: 100%;
		background-color: white;
		color: #3a4490;
		padding: 15px 15px;
		font-size: 16px;
		&::placeholder {
			color: #3a4490;
		}
	}
`;

export default TodoForm;
