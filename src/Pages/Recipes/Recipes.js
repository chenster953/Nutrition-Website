import React, { useEffect, useState } from 'react';
import './recipes.scss';
import Topbar from '../../Components/Topbar/Topbar';
import axios from 'axios';
import BlogCard from '../../Components/BlogCard/BlogCard';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getBlogs').then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <div className="recipes">
      <div className="recipeswrapper">
        <Topbar />
        <div className="search-container">
          <h1>Find a Recipe</h1>
          <input type="text" placeholder="search" />
        </div>
        <div className="blog-results-container">
          <div className="resultsheader">
            <h2>Get Inspired</h2>
            <Link to="/newBlogPost">
              <button>Create Blog Post</button>
            </Link>
          </div>
          <div className="blog-container">
            {blogs.map((blog) => {
              return (
                <div>
                  <BlogCard blog={blog} key={blog._id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
