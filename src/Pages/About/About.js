import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import './about.scss'
import freshfruit from '../../images/freshfruit.jpeg'

const About = () => {
  return (
    <div className='about'>
      <Topbar />
      <div className="about-container">
        <h1>About Us</h1>
        <img src={freshfruit} alt="freshfruit" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam nam ipsam vero consequatur fugiat repudiandae fuga animi accusantium modi labore, praesentium totam quam! Architecto, blanditiis saepe dolore repudiandae praesentium iure laboriosam aliquid rem similique rerum nostrum dolorum tempore doloremque?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam qui aspernatur itaque adipisci distinctio tempore consequuntur, totam, ducimus ab, est minus. Rerum incidunt ipsa dolore vero, dicta molestias! Quia consectetur modi nisi cumque, ducimus voluptatibus illum quis unde quas obcaecati a repellat nam aut saepe quod hic deserunt. Laboriosam quo eligendi ratione eius sed, ex praesentium optio voluptatibus! Quod, repellendus.</p>
      </div>
        <Footer />
    </div>
  )
}

export default About