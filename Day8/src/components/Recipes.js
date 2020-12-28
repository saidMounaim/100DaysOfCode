import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Recipes = () => {
	const [recipes, setRecipes] = useState([]);
	const [query, setQuery] = useState('');
	let history = useHistory();

	const fetchRecipes = async () => {
		const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`).then((response) =>
			response.json()
		);
		setRecipes(data.meals);
	};

	useEffect(() => {
		fetchRecipes();
	}, [query, history]);

	const handleModal = (id) => {
		console.log(id);
		const modal = document.getElementById(`${id}`);
		modal.classList.add('show');
	};

	const closeModal = (e) => {
		e.stopPropagation();
		if (e.target.classList.contains('modal')) {
			e.target.classList.remove('show');
			console.log('jjz');
		}
	};

	return (
		<>
			<div className="search">
				<input
					type="text"
					onChange={(e) => setQuery(e.target.value)}
					value={query}
					placeholder="Search for meal"
				/>
			</div>
			<div className="grid">
				{recipes === null ? (
					<>
						<h1>No Recipe Found</h1>
					</>
				) : (
					recipes?.map((recipe) => (
						<div className="item" key={recipe.idMeal} onClick={() => handleModal(recipe.idMeal)}>
							<div className="image">
								<img src={recipe.strMealThumb} />
							</div>
							<div className="info">
								<h5>{recipe.strCategory}</h5>
								<h3>{recipe.strMeal}</h3>
								<span>{recipe.strTags}</span>
							</div>
							<div className="modal" id={recipe.idMeal} onClick={closeModal}>
								<div className="content-modal">
									<p>{recipe.strInstructions}</p>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default Recipes;
