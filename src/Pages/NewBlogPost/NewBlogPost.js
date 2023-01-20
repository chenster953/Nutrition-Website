import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './newblogpost.scss';

const NewBlogPost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDesc] = useState('');
  const [body, setBody] = useState('');

  const sendBlogPost = () => {
    axios
      .post('http://localhost:3001/postBlogs', {
        title,
        author,
        description,
        body,
        approved: false,
      })
      .then((response) => {
        alert('Post Submitted for Review');
      });
  };

  return (
    <div className="newblogpost">
      <h1>Create a Blog Post</h1>
      <div className="newblogpostwrapper">
        <form>
          <div className="title">
            <label htmlFor="title">Title: </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="Title of post"
            />
          </div>
          <div className="author">
            <label htmlFor="author">Author: </label>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              name="author"
              placeholder="Name of Author"
            />
          </div>
          <div>
            <label htmlFor="desc">Short Description: </label>
            <textarea
              name="desc"
              placeholder="Short description of article..."
              className="desc"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="post">Post: </label>
            <textarea
              name="post"
              className="post"
              placeholder="Write your post here..."
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
        </form>
        <Link to="/recipes">
          <button onClick={sendBlogPost}>Submit for Review</button>
        </Link>
      </div>
    </div>
  );
};

export default NewBlogPost;
