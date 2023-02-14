import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Topbar from '../../Components/Topbar/Topbar';
import './method.scss';
import foodscale from '../../images/food-scale.jpeg';
import mealplan from '../../images/meal-plan.jpeg';
import consistent from '../../images/consistent.webp';

const Method = () => {
  return (
    <div className="method">
      <Topbar />
      <div className="method-container">
        <h1>Our Method</h1>
        <div className="images">
          <img src={mealplan} alt="mealplan" />
          <img src={foodscale} alt="foodscale" />
          <img src={consistent} alt="consistent" />
        </div>
        <div className="steps">
          <h2>Steps</h2>
          <ul>
            <li>
              <h3>Step 1: Establish Specific Goals and a Realistic Timeline</h3>
              <p>
                It's important to establish specific goals that you want to
                achieve and have a realistic timeline to achieve them. This will
                help you stay motivated and focused, and prevent you from
                becoming overwhelmed by the journey ahead.
              </p>
            </li>
            <li>
              <h3>Step 2: Develop a Nutrition Plan</h3>
              <p>
                Having a nutrition plan that aligns with your goals is crucial
                to achieving your desired physique. Determine your calorie needs
                and macronutrient requirements (protein, carbs, fats) based on
                your goals, and create a meal plan that includes whole,
                nutritious foods.
              </p>
            </li>
            <li>
              <h3>Step 3: Create an Exercise Plan</h3>
              <p>
                Exercise is critical to achieving your dream physique. Whether
                it's strength training, cardio, or a combination of both,
                develop an exercise plan that's tailored to your goals and
                current fitness level.
              </p>
            </li>
            <li>
              <h3>Step 4: Track Progress and Make Adjustments</h3>
              <p>
                Regularly tracking your progress is important to see if you're
                on track to achieving your goals. If you're not seeing the
                results you want, consider making adjustments to your nutrition
                or exercise plan.
              </p>
            </li>
            <li>
              <h3>Step 5: Stay Consistent and Stay Motivated</h3>
              <p>
                Achieving a dream physique takes time and dedication. Stay
                consistent with your nutrition and exercise plan, and find ways
                to stay motivated, such as having a workout partner or rewarding
                yourself for achieving milestones.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Method;
