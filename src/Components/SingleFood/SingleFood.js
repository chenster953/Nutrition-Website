import React from 'react';
import './singlefood.scss';

const SingleFood = (props) => {

  return (
    <div className="singlefood">
      {props.stats.map((data) => {
        return (
          <div className="foodcontainer">
            <h1>{data.label}</h1>
            <img src={data.image} alt="imagine" />
            <p>Calories: {data.calories}</p>
            <p>Protein: {data.protein}g</p>
            <p>Fats: {data.fats}g</p>
            <p>Carbs: {data.carbs}g</p>
            <button onClick={()=> props.handleAdd(data)} >+</button>
          </div>
        );
      })}
    </div>
  );
};

export default SingleFood;
