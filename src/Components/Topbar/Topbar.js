import React from 'react';
import './topbar.scss';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <div className="logo">ℂ𝔸𝕃𝕊-ℝ-𝕌𝕊</div>
      </div>
      <div className="center">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Method</li>
            <li>Builder</li>
            <li>Recipes</li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <div className="socials">
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
