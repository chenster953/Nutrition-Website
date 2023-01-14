import React, { useState } from 'react';
import Mealplan from '../../Components/Mealplan/Mealplan';
import './builder.scss';

const Builder = () => {
  const [stats, setStats] = useState({
    gender: '',
    age: '',
    weight: '',
    height: '55',
    activity: '1.2',
  });

  const updateStats = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStats((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [measure, setMeasure] = useState('Imperial');
  const [bmr, setBmr] = useState(0);

  const changeMeasure = () => {
    if (measure === 'Imperial') {
      setMeasure('Metric');
    } else setMeasure('Imperial');
  };

  let calcbmr;

  const [disabled, setDisabled] = useState(true);

  const calculate = () => {
    if (measure === 'Imperial') {
      if (stats.gender === 'male') {
        calcbmr = Math.round(
          10 * (parseInt(stats.weight) * 0.4536) +
            (6.25 * (parseInt(stats.height) * 2.54) - 5 * stats.age) +
            5
        );
        setBmr(calcbmr);
      } else if (stats.gender === 'female') {
        calcbmr = Math.round(
          10 * (parseInt(stats.weight) * 0.4536) +
            (6.25 * (parseInt(stats.height) * 2.54) - 5 * stats.age) -
            161
        );
        setBmr(calcbmr);
      } else {
        alert('Please select a gender');
      }
    } else if (measure === 'Metric') {
      if (stats.gender === 'male') {
        calcbmr = Math.round(
          10 * parseInt(stats.weight) +
            (6.25 * parseInt(stats.height) - 5 * stats.age) +
            5
        );
        setBmr(calcbmr);
      } else if (stats.gender === 'female') {
        calcbmr = Math.round(
          10 * parseInt(stats.weight) +
            (6.25 * parseInt(stats.height) - 5 * stats.age) -
            161
        );
        setBmr(calcbmr);
      } else {
        alert('Please select a gender');
      }
    }
    if (calcbmr !== 0) {
      setDisabled(false);
    }
    if (stats.age === '' || stats.weight === '') {
      alert('fill out the form');
    }
  };

  return (
    <div className="builder">
      <div className="questionnaire">
        <h1>Find Your Goal Daily Caloric Intake</h1>
        <p>
          Fill out this form to see your specific caloric requirements needed to
          meet your goals.
        </p>
        <div className="measurements">
          <button
            onClick={() => {
              changeMeasure();
            }}
          >
            {measure}
          </button>
        </div>
        <form>
          <div className="gender">
            <label htmlFor="gender">Gender</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={updateStats}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={updateStats}
            />
            Female
          </div>
          <div className="age">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              placeholder="21"
              min={0}
              max={110}
              required
              onChange={updateStats}
              name="age"
            />
          </div>
          <div className="weight">
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              min={0}
              max={400}
              required
              name="weight"
              onChange={updateStats}
              placeholder={measure === 'Imperial' ? 'lbs' : 'kg'}
            />
          </div>
          <div className="height">
            <label htmlFor="height">Height</label>
            {measure === 'Imperial' ? (
              <select name="height" id="height" required onChange={updateStats}>
                <option value="55">4ft 7in</option>
                <option value="56">4ft 8in</option>
                <option value="57">4ft 9in</option>
                <option value="58">4ft 10in</option>
                <option value="59">4ft 11in</option>
                <option value="60">5ft 0 in</option>
                <option value="61">5ft 1in</option>
                <option value="62">5ft 2in</option>
                <option value="63">5ft 3in</option>
                <option value="64">5ft 4in</option>
                <option value="65">5ft 5in</option>
                <option value="66">5ft 6in</option>
                <option value="67">5ft 7in</option>
                <option value="68">5ft 8in</option>
                <option value="69">5ft 9in</option>
                <option value="70">5ft 10in</option>
                <option value="71">5ft 11in</option>
                <option value="72">6ft 0 in</option>
                <option value="73">6ft 1in</option>
                <option value="74">6ft 2in</option>
                <option value="75">6ft 3in</option>
                <option value="76">6ft 4in</option>
                <option value="77">6ft 5in</option>
                <option value="78">6ft 6in</option>
                <option value="79">6ft 7in</option>
                <option value="80">6ft 8in</option>
                <option value="81">6ft 9in</option>
                <option value="82">6ft 10in</option>
                <option value="83">6ft 11in</option>
                <option value="84">7ft 0 in</option>
              </select>
            ) : (
              <input type="text" placeholder="cm" />
            )}
          </div>
          <div
            className="activity"
            required
            onChange={updateStats}
            name="activity"
          >
            <label htmlFor="activity">Activity</label>
            <select name="activity" id="activity">
              <option value="1.2">Sedentary (office job)</option>
              <option value="1.375">Light Exercise (1-2 days/week)</option>
              <option value="1.55">Moderate Exercise (3-5 days/week)</option>
              <option value="1.725">Heavy Exercise (6-7 days/week)</option>
              <option value="1.9">Athlete (2x per day)</option>
            </select>
          </div>
        </form>
        <button className="calculate" onClick={calculate}>
          Calculate!
        </button>
      </div>
      <Mealplan bmr={bmr} stats={stats} />
    </div>
  );
};

export default Builder;
