import React, { useState, useEffect } from 'react'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);


    const fetchRecipes = async () => {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken").then(response => response.json())
        setRecipes(data.meals);
    }


    useEffect(() => {
        fetchRecipes();
    }, [])


    return (
        <>
            <div className="search">
                <input placeholder="Search for meal" />
            </div>
            <div className="grid" >
                {recipes.map(recipe =>
                    <div className="item">
                        <div className="image">
                            <img src={recipe.strMealThumb} />
                        </div>
                        <div className="info">
                            <h5>{recipe.strCategory}</h5>
                            <h3>{recipe.strMeal}</h3>
                            <span>{recipe.strTags}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Recipes
