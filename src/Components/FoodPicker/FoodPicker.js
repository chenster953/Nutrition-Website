import React, { useState } from 'react';
import './foodpicker.scss';

const FoodPicker = () => {
  const [query, setQuery] = useState('');
  const [nutritionStats, setNutritionStats] = useState([{}])

  const search = async (searchTerm) => {
    const res = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&ingr=${searchTerm}&nutrition-type=cooking&calories=300&nutrients%5BCHOCDF%5D=0%2B&nutrients%5BFAT%5D=0%2B&nutrients%5BPROCNT%5D=0%2B`
    );
    const data = await res.json();
    const workingData = await data.hints;
    const filteredData = workingData.map((element) => ({
      label: element.food.label,
      id: element.food.foodId,
      image: element.food.image,
      calories: element.food.nutrients.ENERC_KCAL,
      carbs: element.food.nutrients.CHOCDF,
      fat: element.food.nutrients.FAT,
      protein: element.food.nutrients.PROCNT
    }))
    setNutritionStats(filteredData);
    console.log(nutritionStats);
  };

  return (
    <div className="foodPicker" id="foodpicker">
      <div className="queries">
        <button className="lowest">Lowest</button>
        <button className="lowest">Highest</button>
        <div className="search">
          <input
            type="text"
            placeholder="Search for Food"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="lookup" onClick={() =>search(query)}>
            Search
          </button>
        </div>
        <button className="viewmacros">View Macros</button>
        <button className="recipes">Search Recipes</button>
      </div>
      <div className="searchresults">
        RENDER OUT A SINGLEFOOD COMPONENT
      </div>
    </div>
  );
};

export default FoodPicker;
