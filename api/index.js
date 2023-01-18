const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const blogModel = require('./models/Blog');

mongoose.connect(
  'mongodb+srv://theapidemon:banana71699@nutrition-app-api.8sytfrh.mongodb.net/?retryWrites=true&w=majority'
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

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
