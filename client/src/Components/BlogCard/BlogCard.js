import React from 'react';
import './blogcard.scss';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
  return (
    <div className="blogcard">
      <h1>{props.blog.title}</h1>
      <p>{props.blog.author}</p>
      <p>{props.blog.date}</p>
      <p>{props.blog.description}</p>
      <Link to={`/blogs/${props.blog._id}`}>
        <button>Read More ➤</button>
      </Link>
    </div>
  );
};

export default BlogCard;
