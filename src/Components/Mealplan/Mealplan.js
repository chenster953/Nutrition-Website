import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import FoodPicker from '../FoodPicker/FoodPicker';
import './mealplan.scss';

const Mealplan = ({ bmr, stats }) => {
  const maintainence = Math.round(bmr * stats.activity);
  const sedentary = Math.round(bmr * 1.2);
  const light = Math.round(bmr * 1.375);
  const moderate = Math.round(bmr * 1.55);
  const heavy = Math.round(bmr * 1.725);
  const athlete = Math.round(bmr * 1.9);
  const meal = Math.round(maintainence / 3);

  const protein = stats.weight;
  const [goal, setGoal] = useState(null);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);
  const [macroTargets, setMacroTargets] = useState({});

  const maintain = () => {
    setGoal('maintain');
    setFats(Math.round(stats.weight * 0.4));
    setCarbs(
      Math.round((maintainence - (protein * 4 + stats.weight * 0.4 * 9)) / 4)
    );
    setMacroTargets({
      calories: maintainence,
      protein: protein,
      carbs: Math.round(
        (maintainence - (protein * 4 + stats.weight * 0.4 * 9)) / 4
      ),
      fats: Math.round(stats.weight * 0.4),
    });
  };

  const bulk = () => {
    setGoal('bulk');
    setFats(Math.round(stats.weight * 0.45));
    setCarbs(
      Math.round(
        (maintainence + 300 - (protein * 4 + stats.weight * 0.45 * 9)) / 4
      )
    );
    setMacroTargets({
      calories: maintainence + 300,
      protein: protein,
      carbs: Math.round(
        (maintainence + 300 - (protein * 4 + stats.weight * 0.45 * 9)) / 4
      ),
      fats: Math.round(stats.weight * 0.45),
    });
  };

  const cut = () => {
    setGoal('cut');
    setFats(Math.round(stats.weight * 0.35));
    setCarbs(
      Math.round(
        (maintainence - 300 - (protein * 4 + stats.weight * 0.35 * 9)) / 4
      )
    );
    setMacroTargets({
      calories: maintainence - 300,
      protein: protein,
      carbs: Math.round(
        (maintainence - 300 - (protein * 4 + stats.weight * 0.35 * 9)) / 4
      ),
      fats: Math.round(stats.weight * 0.35),
    });
  };

  return (
    <div className="mealplan" id="mealplan">
      <div className="topwrapper">
        <div className="caloriesnumber">
          <h1>Your Maintenance Calories</h1>
          <h2>{maintainence}</h2>
          <p>calories per day</p>
          <h2>{meal}</h2>
          <p>calories per meal (3 meals/day)</p>
        </div>
        <div className="info">
          <p>
            Using the Katch-McArdle Formula, your maintainence calories are
            <strong> {maintainence} </strong>
            calories per day. The table below shows the daily caloric intake
            calculations for different activity levels.
          </p>
          <div className="basal">
            <p>Basal Metabolic Rate</p>
            <p>
              <strong>{bmr}</strong> calories per day
            </p>
          </div>
          <div className="sedentary">
            <p>Sedentary</p>
            <p>
              <strong>{sedentary}</strong> calories per day
            </p>
          </div>
          <div className="light">
            <p>Light Exercise</p>
            <p>
              <strong>{light}</strong> calories per day
            </p>
          </div>
          <div className="moderate">
            <p>Moderate Exercise</p>
            <p>
              <strong>{moderate}</strong> calories per day
            </p>
          </div>
          <div className="heavy">
            <p>Heavy Exercise</p>
            <p>
              <strong>{heavy}</strong> calories per day
            </p>
          </div>
          <div className="athlete">
            <p>Athlete</p>
            <p>
              <strong>{athlete}</strong> calories per day
            </p>
          </div>
        </div>
      </div>
      <div className="choosepath">
        <h1>
          Choose if you want to maintain your weight, lose weight, or gain
          weight
        </h1>
        <div className="choices">
          <HashLink to="#display" smooth>
            <button className="maintain" onClick={maintain}>
              Maintain
            </button>
          </HashLink>
          <button className="bulk" onClick={bulk}>
            Bulk
          </button>
          <button className="cut" onClick={cut}>
            Cut
          </button>
        </div>
        <p className="totalcals">
          {goal
            ? `Since your goal is to ${goal}, your recommended daily caloric intake is going to be ${
                goal === 'maintain'
                  ? maintainence
                  : goal === 'bulk'
                  ? maintainence + 300
                  : maintainence - 300
              }`
            : 'Please select a goal'}
        </p>
        <h2 id="display">
          These numbers reflect the most optimal amount of macronutrients to
          consume for your goal weight.
        </h2>
        <div className="macros">
          <div className="proteins">
            <p>Proteins:</p>
            <p>{protein}g</p>
          </div>
          <div className="carbs">
            <p>Carbs:</p>
            <p>{carbs}g</p>
          </div>
          <div className="fats">
            <p>Fats:</p>
            <p>{fats}g</p>
          </div>
        </div>
      </div>
      <div className="setup">
        <h3>
          TOTAL DAILY INTAKE:{' '}
          {`${
            goal === 'maintain'
              ? maintainence
              : goal === 'bulk'
              ? maintainence + 300
              : maintainence - 300
          } calories`}
        </h3>
        <p>
          Now that we have your calories and macros calculated, you are reading
          to begin building your customized meal plan tailored to fit your
          goals. You can also choose to add complete recipes instead of adding
          individual foods.
        </p>
        <HashLink to="#foodpicker" smooth>
          <button>Begin Now</button>
        </HashLink>
      </div>
      <FoodPicker macroTargets={macroTargets}/>
    </div>
  );
};

export default Mealplan;
