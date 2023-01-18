import React from 'react'
import './recipes.scss'
import Topbar from '../../Components/Topbar/Topbar'

const Recipes = () => {
  return (
    <div className='recipes'>
      <Topbar />
      <div className="search-container">
        <h1>Find a Recipe</h1>
        <input type="text" placeholder='search'/>
      </div>
      <div className="blog-results-container">
        <h2>blogposts</h2>
        <h2>SEARCHRESULTS</h2>
      </div>
    </div>
  )
}

export default Recipes