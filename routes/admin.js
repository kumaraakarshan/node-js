const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Store messages in memory
let messages = [];

router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

router.get('/login', (req, res, next) => {
  res.send(
    '<form action="/login" method="POST"><input type="text" name="username"><button type="submit">Login</button></form>'
  );
});

router.post('/login', (req, res, next) => {
  const { username } = req.body;
  if (username) {
    // Store the username in browser's local storage
    res.locals.username = username;
  }
  res.redirect('/');
});

router.get('/', (req, res, next) => {
  const username = res.locals.username || 'Guest'; // Retrieve the username from res.locals

  // Show send message form and previous messages
  let messagesHtml = '';
  for (const message of messages) {
    messagesHtml += `<p><strong>${message.username}:</strong> ${message.message}</p>`;
  }

  const formHtml = `<form action="/product" method="POST"><input type="text" name="message"><button type="submit">Send Message</button></form>`;

  res.send(`<h1>Welcome, ${username}!</h1>${formHtml}${messagesHtml}`);
});

router.post('/product', (req, res, next) => {
  const { message } = req.body;
  const username = res.locals.username || 'Guest'; // Retrieve the username from res.locals

  if (message && username) {
    messages.push({ username, message });

    // Store messages in a file (for simplicity, you can use a database in a real application)
    const messagesFilePath = path.join(__dirname, 'messages.txt');
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2), 'utf8');
  }

  res.redirect('/');
});

module.exports = router;
