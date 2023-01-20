const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String
  },
  body: {
    type: String,
  },
  approved: {
    type: Boolean,
  },
});

const BlogModel = mongoose.model('Blogs', BlogSchema);
module.exports = BlogModel;
