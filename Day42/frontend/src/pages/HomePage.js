import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../api';

const HomePage = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		try {
			const users = await axios.get(`${API_URL}/users`);
			setUsers(users.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const deleteUser = async (id) => {
		try {
			if (window.confirm('Are u sure?')) {
				await axios.delete(`${API_URL}/user/${id}`);
				const filtredUsers = users.filter((user) => user._id !== id);
				setUsers(filtredUsers);
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, [users]);

	return (
		<div className="mt-4 container">
			<h2 className="mb-4">User Management</h2>
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">Full Name</th>
						<th scope="col">Mail</th>
						<th scope="col">Genre</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						<tr key={user._id}>
							<th scope="row">{user.fullName}</th>
							<td>{user.mail}</td>
							<td>{user.genre}</td>
							<td>
								<Link className="btn btn-success" to={`/edit/${user._id}`}>
									Edit
								</Link>
								<button className="btn btn-danger ml-2" onClick={() => deleteUser(user._id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default HomePage;
