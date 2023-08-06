const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Middleware 1
app.use('/', (req, res, next) => {
  console.log('always run!!!');
  next(); // Call next() to pass control to the next middleware
});

// Middleware 2
app.get('/add-product', (req, res, next) => {
  console.log('in another middleware');
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Middleware 3
app.post('/product', (req, res, next) => {
  console.log('Form data:', req.body); // This will log the parsed form data to the console
  res.redirect('/');
});

// Middleware 4
app.use('/', (req, res, next) => {
  console.log('another middle ware!!!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
