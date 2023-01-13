import React from 'react';
import './mealplan.scss';

const Mealplan = ({ stats }) => {
  return (
    <div className="mealplan">
      <div className="topwrapper">
        <div className="caloriesnumber">
          <h1>Your Maintenance Calories</h1>
          <h2>3030</h2>
          <p>calories per day</p>
          <h2>640</h2>
          <p>calories per meal</p>
        </div>
        <div className="info">
          <p>
            Using the Katch-McArdle Formula, your maintainence calories are 3030
            calories per day. The table below shows the daily caloric intake
            calculations for different activity levels.
          </p>
          <div className="basal">
            <p>Basal Metabolic Rate</p>
            <p>1000 calories per day</p>
          </div>
          <div className="sedentary">
            <p>Sedentary</p>
            <p>1000 calories per day</p>
          </div>
          <div className="light">
            <p>Light Exercise</p>
            <p>1000 calories per day</p>
          </div>
          <div className="moderate">
            <p>Moderate Exercise</p>
            <p>1000 calories per day</p>
          </div>
          <div className="heavy">
            <p>Heavy Exercise</p>
            <p>1000 calories per day</p>
          </div>
          <div className="athlete">
            <p>Athlete</p>
            <p>1000 calories per day</p>
          </div>
        </div>
      </div>
      <div className="choosepath">
        <h1>
          Choose if you want to maintain your weight, lose weight, or gain
          weight
        </h1>
        <div className="choices">
          <button className="maintain">Maintain</button>
          <button className="bulk">Bulk</button>
          <button className="cut">Cut</button>
        </div>
        <h2>
          These numbers reflect the most optimal amount of macronutrients to
          consume for your goal
        </h2>
        <div className="macros">
          <div className="proteins">
            <p>Proteins:</p>
            <p>100g</p>
          </div>
          <div className="carbs">
            <p>Carbs:</p>
            <p>100g</p>
          </div>
          <div className="fats">
            <p>Fats:</p>
            <p>100g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mealplan;
