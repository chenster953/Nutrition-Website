import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import SingleFood from '../SingleFood/SingleFood';
import './foodpicker.scss';

const FoodPicker = ({macroTargets}) => {
  const [query, setQuery] = useState('');
  const [nutritionStats, setNutritionStats] = useState([{}]);
  const [viewResults, setViewResults] = useState(false);

  const [remainingCalories, setRemainingCalories] = useState(0)
  const [remainingProtein, setRemainingProtein] = useState(0)
  const [remainingCarbs, setRemainingCarbs] = useState(0)
  const [remainingFats, setRemainingFats] = useState(0)

  useEffect(()=> {
    setRemainingCalories(macroTargets.calories)
    setRemainingProtein(macroTargets.protein)
    setRemainingCarbs(macroTargets.carbs)
    setRemainingFats(macroTargets.fats)
    console.log(macroTargets)
  }, [macroTargets])

  const handleAdd = (data) => {
    setRemainingCalories(prevCalories => prevCalories - data.calories);
    setRemainingProtein(prevProtein => prevProtein - data.protein);
    setRemainingCarbs(prevCarbs => prevCarbs - data.carbs);
    setRemainingFats(prevFats => prevFats - data.fats);
  }

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
      calories: Math.round(parseInt(element.food.nutrients.ENERC_KCAL)),
      carbs: Math.round(parseInt(element.food.nutrients.CHOCDF)),
      fats: Math.round(parseInt(element.food.nutrients.FAT)),
      protein: Math.round(parseInt(element.food.nutrients.PROCNT)),
    }));
    setNutritionStats(filteredData);
    setViewResults(true);
  };

  const lowest = (a, b) => {
    if (a.calories > b.calories) {
      return 1;
    } else if (b.calories > a.calories) {
      return -1;
    } else {
      return 0;
    }
  };

  const highest = (a, b) => {
    if (a.calories < b.calories) {
      return 1;
    } else if (b.calories < a.calories) {
      return -1;
    } else {
      return 0;
    }
  };

  return (
    <div className="foodPicker" id="foodpicker">
      <div className="queries">
        <button
          className="lowest"
          onClick={() => setNutritionStats(nutritionStats.slice().sort(lowest))}
        >
          Lowest Cals.
        </button>
        <button
          className="lowest"
          onClick={() =>
            setNutritionStats(nutritionStats.slice().sort(highest))
          }
        >
          Highest Cals.
        </button>
        <div className="search">
          <input
            type="text"
            placeholder="Search for Food"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="lookup" onClick={() => search(query)}>
            Search
          </button>
        </div>
        <HashLink to="#display" smooth>
          <button className="viewmacros">View Macros</button>
        </HashLink>
        <button className="recipes">Search Recipes</button>
      </div>
      <div className="remaining">
        <span>Calories remaining: {remainingCalories}</span>
        <span>Protein remaining: {remainingProtein}g</span>
        <span>Carbs remaining: {remainingCarbs}g</span>
        <span>Fats remaining: {remainingFats}g</span>
      </div>
      <div className="searchresults">
        {viewResults && <SingleFood stats={nutritionStats} handleAdd={handleAdd}/>}
      </div>
    </div>
  );
};

export default FoodPicker;
