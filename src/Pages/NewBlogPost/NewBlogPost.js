import React from 'react';
import './newblogpost.scss';

const NewBlogPost = () => {
  return (
    <div className="newblogpost">
      <h1>Create a Blog Post</h1>
      <div className="newblogpostwrapper">
        <form>
          <div className="title">
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" placeholder="Title of post" />
          </div>
          <div className="author">
            <label htmlFor="author">Author: </label>
            <input type="text" name="author" placeholder="Name of Author" />
          </div>
          <div>
            <label htmlFor="desc">Short Description: </label>
            <textarea
              name="desc"
              placeholder="Short description of article..."
              className="desc"
            ></textarea>
          </div>
          <div>
            <label htmlFor="post">Post: </label>
            <textarea
              name="post"
              className="post"
              placeholder="Write your post here..."
            ></textarea>
          </div>
        </form>
        <button>Submit for Review</button>
      </div>
    </div>
  );
};

export default NewBlogPost;
