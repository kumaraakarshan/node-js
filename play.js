const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', (req, res, next) => {
 // console.log('always run!!!');
  next(); 
});


app.get('/add-product', (req, res, next) => {
  //console.log('in another middleware');
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>
  `);
});

app.post('/product', (req, res, next) => {
  console.log('Form data:', req.body.title);
  res.redirect('/');
});


app.use('/', (req, res, next) => {
  //console.log('another middle ware!!!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(4000, () => {
 // console.log('Server is running on port 4000');
});
