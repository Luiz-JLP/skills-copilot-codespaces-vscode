// Create Web Server
const express = require('express');
const app = express();

// Import comments
const comments = require('./comments');

// Create a route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Listen on port 4001
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
}); 