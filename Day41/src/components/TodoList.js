import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DeleteTodo } from '../redux/TodoActions';

const TodoList = () => {
	const { todos } = useSelector((state) => state.todo);
	const dispatch = useDispatch();

	return (
		<TodoListStyled>
			{todos.length !== 0 ? (
				todos.map((todo, index) => (
					<div className="todo" key={index}>
						<div className="leftSide">
							<label>{todo.name}</label>
						</div>
						<div className="rightSide">
							<button onClick={() => dispatch(DeleteTodo(index))}>Delete</button>
						</div>
					</div>
				))
			) : (
				<>
					<h2>No Todo List Found</h2>
				</>
			)}
		</TodoListStyled>
	);
};

const TodoListStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
	background: white;
	padding: 31px;
	padding-bottom: 4px;
	border-radius: 5px;
	h2 {
		margin-bottom: 20px;
		color: #3a4490;
	}
	.todo {
		width: 100%;
		display: flex;
		align-items: center;
		margin-bottom: 25px;
		position: relative;
		justify-content: space-between;

		label {
			font-size: 22px;
			color: #8a7bb3;
			font-weight: 600;
			position: relative;
			&::after {
				content: '';
				width: 0;
				height: 1.5px;
				background-color: #8a7bb3;
				position: absolute;
				left: 0;
				top: 50%;
			}
			&.done {
				&:after {
					width: 100%;
				}
			}
		}
		button {
			background: #f5556b;
			padding: 6px 15px;
			color: white;
			font-size: 15px;
			border: none;
			outline: none;
			cursor: pointer;
		}
	}
`;

export default TodoList;
