const express = require('express');
const path=require('path');
const router = express.Router();
const rootDir=require('../util/path')

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../','views', 'contact.html'));
});

module.exports = router;