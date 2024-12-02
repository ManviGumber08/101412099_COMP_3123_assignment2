const express = require('express');
const router = express.Router();

// Sample GET request for fetching users
router.get('/', (req, res) => {
  res.send('Fetching users...');
});

module.exports = router;
