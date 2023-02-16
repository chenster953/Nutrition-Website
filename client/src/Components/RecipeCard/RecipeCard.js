import React from 'react';
import './recipecard.scss';

const RecipeCard = (props) => {
  return (
    <div className="recipecard">
      <h3>{props.result.title}</h3>
      <img src={props.result.image} alt={props.result.title} />
      <p>Calories: {Math.round(props.result.nutrition.nutrients[0].amount)}</p>
      <p>Protein: {Math.round(props.result.nutrition.nutrients[1].amount)}g</p>
      <p>Carbs: {Math.round(props.result.nutrition.nutrients[3].amount)}g</p>
      <p>Fat: {Math.round(props.result.nutrition.nutrients[8].amount)}g</p>
    </div>
  );
};

export default RecipeCard;
