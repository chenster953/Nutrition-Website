import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="topfooter">
        <div className="logo">ℂ𝔸𝕃𝕊-ℝ-𝕌𝕊</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Method</li>
            <li>Builder</li>
            <li>Recipes</li>
          </ul>
        </nav>
        <div className="contact">
          <p>Lake Tahoe</p>
          <p>lakeTahoe@gmail.com</p>
          <div className="socials">
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
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
