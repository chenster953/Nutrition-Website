import React from 'react';
import './displayingredients.scss';

const DisplayIngredients = (props) => {
  return (
    <div className="displayingredients">
      <h1 id='displayingredients'>Saved Ingredients: </h1>
      {props.ingredients.map((ingredient) => (
        <div className="ingredients">
          <h2>{ingredient.name}</h2>
          <p>Calories: {ingredient.calories}</p>
          <p>Protein: {ingredient.protein}</p>
          <p>Carbs: {ingredient.carbs}</p>
          <p>Fats: {ingredient.fats}</p>
        </div>
      ))}
      <button className='clear' onClick={props.clear}>Clear all</button>
    </div>
  );
};

export default DisplayIngredients;
