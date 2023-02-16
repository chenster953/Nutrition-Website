import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="topfooter">
        <div className="contact">
        <div className="logo">ApexNutrition</div>
        </div>
        <nav>
          <ul>
            <h3>Shop</h3>
            <li>Vitamins and Minerals</li>
            <li>Protein Supplements</li>
            <li>Pre-Workout</li>
            <li>Electrolytes</li>
            <li>Meal Replacement shakes</li>
          </ul>
        </nav>
        <nav>
          <ul>
            <h3>Templates</h3>
            <li>Weight Loss Nutrition Plan</li>
            <li>Exercise Plan</li>
            <li>Calorie Tracker</li>
            <li>Step Counters & Logger</li>
            <li>Anabolic Cookbook</li>
          </ul>
        </nav>
        <nav>
          <ul>
            <h3>Company</h3>
            <li>About ApexNutrition</li>
            <li>News</li>
            <li>Read our Blogs</li>
            <li>Terms of Service</li>
            <li>Private Policy</li>
          </ul>
        </nav>
      </div>
      <div class="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
    </div>
  );
};

export default Footer;
