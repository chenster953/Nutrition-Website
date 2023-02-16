import React, { useEffect, useState } from 'react';
import './singleblog.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/blogs/${id}`).then((response) => {
      setBlog(response.data[0]);
    });
  }, [id]);

  return (
    <div className="singleblog">
      <div className="singleblogwrapper">
        {console.log(blog)}
        <h1>{blog.title}</h1>
        <p>By: {blog.author}</p>
        <p>Published on: {blog.date}</p>
        <p>{blog.body}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
