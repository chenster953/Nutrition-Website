import React from 'react';
import './topbar.scss';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <div className="logo"><button>ℂ𝔸𝕃𝕊-ℝ-𝕌𝕊</button></div>
      </div>
      <div className="center">
        <nav>
          <ul>
            <Link className='link' to='/'><li>Home</li></Link>
            <Link className='link' to='/about'><li>About</li></Link>
            <Link className='link' to='/method'><li>Method</li></Link>
            <Link className='link' to='/builder'><li>Builder</li></Link>
            <Link className='link' to='/recipes'><li>Recipes</li></Link>
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
