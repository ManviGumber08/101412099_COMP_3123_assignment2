const express = require('express');
const router = express.Router();

// Sample POST request for login
router.post('/login', (req, res) => {
  // Your login logic here
  res.send('Login successful');
});

// Sample POST request for signup
router.post('/signup', (req, res) => {
  // Your signup logic here
  res.send('Signup successful');
});

module.exports = router;
