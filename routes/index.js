const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

// Welcome Page
router.get('/', (req, res) => {
    const currentUser = null
      res.render('welcome', {pageTitle: 'Welcome to Purnama'});
  });

router.get('/about', (req, res) => {
  res.render('about', {pageTitle: 'About'})
})



  module.exports = router;