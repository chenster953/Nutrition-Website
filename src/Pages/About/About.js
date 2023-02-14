import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Topbar from '../../Components/Topbar/Topbar';
import './about.scss';
import freshfruit from '../../images/freshfruit.jpeg';

const About = () => {
  return (
    <div className="about">
      <Topbar />
      <div className="about-container">
        <h1>About Us</h1>
        <img src={freshfruit} alt="freshfruit" />
        <p>
          Welcome to our fitness website focused on nutrition! We are passionate
          about helping you achieve your fitness goals through optimal
          nutrition. We believe that what you eat can have a significant impact
          on your physical and mental health, and that the right nutrition plan
          can help you achieve your fitness goals faster and more efficiently.
          Our team of certified nutritionists and fitness experts is committed
          to providing you with the information, tools, and support you need to
          achieve your goals.
        </p>
        <p>
          At our website, you will find a wide range of resources to help you
          optimize your nutrition for fitness. We provide comprehensive guides
          on macronutrients, micronutrients, and meal planning that are tailored
          to your fitness goals. We also offer a range of healthy and delicious
          recipes that are easy to make and packed with the nutrients your body
          needs to perform at its best. We also provide in-depth reviews of
          supplements and nutritional products to help you make informed
          decisions about what to include in your nutrition plan.
        </p>
        <p>
          We understand that optimal nutrition is not a one-size-fits-all
          solution. That's why we offer personalized coaching services to help
          you develop a customized nutrition plan that is tailored to your
          individual needs and preferences. Our team of certified nutritionists
          will work with you to create a nutrition plan that fits your fitness
          goals, lifestyle, and preferences. We also offer online group coaching
          programs that provide a supportive community and accountability to
          help you stay on track.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
