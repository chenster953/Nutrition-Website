import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'
import './method.scss'

const Method = () => {
  return (
    <div className='method'>
      <Topbar />
      <div className="method-container">
        <h1>Our Method</h1>
        <div className="images">
          <p>img1</p>
          <p>img2</p>
          <p>img3</p>
        </div>
        <div className="steps">
          <h2>Steps</h2>
          <ul>
            <li>step1</li>
            <li>step2</li>
            <li>step3</li>
            <li>step4</li>
            <li>step5</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Method