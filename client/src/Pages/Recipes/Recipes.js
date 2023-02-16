import React, { useEffect, useState } from 'react';
import './recipes.scss';
import Topbar from '../../Components/Topbar/Topbar';
import axios from 'axios';
import BlogCard from '../../Components/BlogCard/BlogCard';
import { Link } from 'react-router-dom';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import Footer from '../../Components/Footer/Footer';

const Recipes = () => {
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getBlogs').then((response) => {
      setBlogs(response.data);
    });
  }, []);

  const search = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=20&addRecipeNutrition=true&apiKey=${process.env.REACT_APP_SPOONTACULAR_API_KEY}`
    );
    const res = await response.json();
    setResults(res.results);
  };

  return (
    <div className="recipes">
      <div className="recipeswrapper">
        <Topbar />
        <div className="search-container">
          <h1>Find a Recipe</h1>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.code === 'Enter') {
                search();
                e.target.value = '';
              }
            }}
          />
        </div>
        <div className="blog-results-container">
          <div className="results">
            <div className="resultsheader">
              <h2>Results:</h2>
            </div>
            <div className="results-container">
              {results.map((result) => {
                return <RecipeCard result={result} />;
              })}
            </div>
          </div>
          <div className="blog">
            <div className="blogheader">
              <h2>Featured Blogs</h2>
              <Link to="/newBlogPost">
                <button>Create Blog Post</button>
              </Link>
            </div>
            <div className="blog-container">
              {blogs.map((blog) => {
                return (
                  <div>
                    {blog.approved ? (
                      <BlogCard blog={blog} key={blog._id} />
                    ) : (
                      ''
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Recipes;
