import React from 'react';
import './displayingredients.scss';

const DisplayIngredients = (props) => {
  return (
    <div className="displayingredients">
      <h1 id='displayingredients'>Saved Ingredients: </h1>
      {console.log(props.ingredients)}
      {props.ingredients.map((ingredient) => (
        <div className="ingredients">
          <h2>{ingredient.name}</h2>
          <p>Calories: {ingredient.calories}</p>
          <p>Protein: {ingredient.protein}</p>
          <p>Carbs: {ingredient.carbs}</p>
          <p>Fats: {ingredient.fats}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayIngredients;
