const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogModel = require('./models/Blog');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://theapidemon:${process.env.REACT_APP_MONGODB_PW}@nutrition-app-api.8sytfrh.mongodb.net/test?retryWrites=true&w=majority`
);

app.get('/getBlogs', (req, res) => {
  blogModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post('/postBlogs', async (req, res) => {
  const blog = req.body;
  const newBlog = new blogModel(blog);
  await newBlog.save();
  res.json(blog);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
