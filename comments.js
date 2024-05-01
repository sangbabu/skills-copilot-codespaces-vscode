// Create web server
// 1. Load the express module
const express = require('express');

// 2. Create an instance of express
const app = express();

// 3. Create a server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// 4. Create a route
app.get('/', (req, res) => {
  res.send('Hello world');
});

// 5. Create a route
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// 6. Create a route
app.get('/comments/:id', (req, res) => {
  res.send('Comment ID: ' + req.params.id);
});

// 7. Create a route
app.get('/comments/:id/:user', (req, res) => {
  res.send('Comment ID: ' + req.params.id + ', User: ' + req.params.user);
});

// 8. Create a route
app.get('/comments/:id/:user/:date', (req, res) => {
  res.send('Comment ID: ' + req.params.id + ', User: ' + req.params.user + ', Date: ' + req.params.date);
});

// 9. Create a route
app.get('/comments/:id/:user/:date/:time', (req, res) => {
  res.send('Comment ID: ' + req.params.id + ', User: ' + req.params.user + ', Date: ' + req.params.date + ', Time: ' + req.params.time);
});