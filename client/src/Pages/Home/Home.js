import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Topbar from '../../Components/Topbar/Topbar';
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="background"></div>
      <Topbar />
      <div className="bigtitle">
        <h2>ApexNutrition</h2>
      </div>
      <div className="hero">
        <h1>WE BELIEVE CONSISTENCY IS KING</h1>
        <p>Designing healthy and balanced meals that YOU enjoy is the key to maintaining a consistent, healthy relationship with food.</p>
        <Link to={'/builder'}><button className="calltoaction">
          START NOW ➤
        </button></Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
