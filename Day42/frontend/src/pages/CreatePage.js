import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../api';

const CreatePage = () => {
	const [user, setUser] = useState({ fullName: '', mail: '', genre: 'Men' });
	const history = useHistory();

	const createUser = async (data) => {
		try {
			await axios.post(`${API_URL}/users`, data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user.fullName !== '' && user.mail !== '') {
			createUser(user);
			history.push('/');
		}
	};

	return (
		<div className="my-4 container">
			<h2 className="mb-4">Create User</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="fullName">Full Name</label>
					<input
						type="text"
						className="form-control"
						value={user.fullName}
						onChange={(e) => setUser({ ...user, fullName: e.target.value })}
						placeholder="Full Name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="fullName">Mail</label>
					<input
						type="email"
						className="form-control"
						value={user.mail}
						onChange={(e) => setUser({ ...user, mail: e.target.value })}
						placeholder="Email Adresse"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="fullName">Genre</label>
					<select
						className="form-control"
						value={user.genre}
						onChange={(e) => setUser({ ...user, genre: e.target.value })}
					>
						<option value="Men">Men</option>
						<option value="Women">Women</option>
					</select>
				</div>
				<div className="form-group">
					<button className="btn btn-primary my-4" type="submit">
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePage;
