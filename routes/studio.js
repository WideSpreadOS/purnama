const express = require('express');
const router = express.Router();



// Welcome Page
router.get('/', (req, res) => {
    const currentUser = null
      res.render('studio/main', {pageTitle: 'Purnama Studio'});
  });

router.get('/about', (req, res) => {
  res.render('studio/about', {pageTitle: 'About Our Studio'})
});

router.get('/classes', (req, res) => {
  res.render('studio/classes', {pageTitle: 'All Classes'})
});

router.get('/teachers', (req, res) => {
  res.render('studio/teachers', {pageTitle: 'All Teachers'})
});



  module.exports = router;