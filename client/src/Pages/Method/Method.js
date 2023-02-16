import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Topbar from '../../Components/Topbar/Topbar';
import './method.scss';
import foodscale from '../../images/food-scale.jpeg';
import mealplan from '../../images/meal-plan.jpeg';
import consistent from '../../images/consistent.webp';

const Method = () => {
  const [opacity1, setOpacity1] = useState(0);
  const [opacity2, setOpacity2] = useState(0);
  const [opacity3, setOpacity3] = useState(0);

  const [brightness1, setBrightness1] = useState(1);
  const [brightness2, setBrightness2] = useState(1);
  const [brightness3, setBrightness3] = useState(1);

  return (
    <div className="method">
      <Topbar />
      <div className="method-container">
        <h1>Our Method</h1>
        <div className="images">
          <img
            src={mealplan}
            alt="mealplan"
            style={{ filter: `brightness(${brightness1})` }}
          />
          <img
            src={foodscale}
            alt="foodscale"
            style={{ filter: `brightness(${brightness2})` }}
          />
          <img
            src={consistent}
            alt="consistent"
            style={{ filter: `brightness(${brightness3})` }}
          />
        </div>
        <div className="imageinfo">
          <div
            className="info1"
            style={{ opacity: opacity1 }}
            onMouseEnter={() => {
              setOpacity1(1);
              setBrightness1(0.2);
            }}
            onMouseLeave={() => {
              setOpacity1(0);
              setBrightness1(1);
            }}
          >
            <h4>Meal Prep</h4>
            <p>
              Meal prep is a crucial aspect of maintaining a healthy and
              balanced diet. It involves planning and preparing meals in
              advance, typically for the week ahead. Meal prep can help
              individuals save time, money, and effort in the long run by
              ensuring that healthy and nutritious meals are readily available
              throughout the week. This can be particularly beneficial for those
              with busy schedules or those trying to stick to specific dietary
              requirements. Meal prep also helps reduce the temptation of making
              unhealthy food choices when faced with limited time or options. By
              taking the time to meal prep, individuals can ensure that they are
              providing their bodies with the essential nutrients needed to fuel
              their daily activities and maintain overall health and wellbeing.
            </p>
          </div>
          <div
            className="info2"
            style={{ opacity: opacity2 }}
            onMouseEnter={() => {
              setOpacity2(1);
              setBrightness2(0.2);
            }}
            onMouseLeave={() => {
              setOpacity2(0);
              setBrightness2(1);
            }}
          >
            <h4>Calorie Tracking</h4>
            <p>
              Calorie tracking is an important tool for people who want to
              manage their weight, improve their eating habits, and maintain a
              healthy lifestyle. By tracking the number of calories consumed
              each day, individuals can gain a better understanding of how their
              diet affects their energy balance and make adjustments
              accordingly. Calorie tracking can also help people identify
              patterns of overeating, which can be a precursor to weight gain
              and other health issues. In addition, tracking calories can
              provide motivation and accountability, helping individuals stay on
              track with their goals. However, it is important to note that
              calorie tracking should be used in conjunction with other healthy
              habits, such as regular exercise and a balanced diet, and should
              not be used as a sole method for weight loss or management.
            </p>
          </div>
          <div
            className="info3"
            style={{ opacity: opacity3 }}
            onMouseEnter={() => {
              setOpacity3(1);
              setBrightness3(0.2);
            }}
            onMouseLeave={() => {
              setOpacity3(0);
              setBrightness3(1);
            }}
          >
            <h4>Staying Consistent</h4>
            <p>
              Staying consistent with your nutrition is crucial for achieving
              and maintaining good health. Consistency allows your body to
              develop healthy habits, and creates a positive feedback loop,
              where healthy eating becomes easier and more automatic over time.
              When you are consistent with your nutrition, you are more likely
              to make healthy food choices and avoid unhealthy ones, which can
              reduce your risk of chronic diseases such as obesity, heart
              disease, and type 2 diabetes. Additionally, staying consistent
              with your nutrition can help you achieve your health and fitness
              goals, as it allows you to track progress and make adjustments as
              needed. By making small, sustainable changes to your eating habits
              and staying consistent over time, you can create a foundation for
              long-term health and well-being.
            </p>
          </div>
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
