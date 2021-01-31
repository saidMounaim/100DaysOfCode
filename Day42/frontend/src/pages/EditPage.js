import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../api';

const EditPage = () => {
	const [user, setUser] = useState({ fullName: '', mail: '', genre: '' });
	const history = useHistory();
	let { id } = useParams();

	const findUser = async () => {
		try {
			const user = await axios.get(`${API_URL}/user/${id}`);
			if (user.status !== 201) {
				history.push('/');
			}
			setUser(user.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		findUser();
	}, [id]);

	const handleUpdate = (e) => {
		e.preventDefault();
		if (user.fullName !== '' && user.mail !== '' && user.genre !== '') {
			const config = {
				'Content-Type': 'application/json',
			};
			const updatedUser = axios.put(`${API_URL}/user/${id}`, user, config);
			history.push('/');
		}
	};

	return (
		<div className="my-4 container">
			<h2 className="mb-4">Update User</h2>
			<form onSubmit={handleUpdate}>
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
						Update
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditPage;
