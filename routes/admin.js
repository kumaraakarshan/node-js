const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.get('/contact', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
});
router.get('/success', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'success.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});



router.post('/contact', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
