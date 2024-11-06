const express = require('express');
const app = express()
const port = 3000

// Home page
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About Me page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Contact Me page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
