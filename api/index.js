const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');

mongoose.connect()

app.listen(3001, () => {
  console.log('Server is running on port 3001')
});