let express = require('express');
let createError = require('http-errors');
let logger = require('morgan');
let app = express();
let path = require('path');
let cookieParser = require('cookie-parser');  // Import cookie-parser

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set the path for views (the folder where your EJS files are)
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'content' folder (or 'public', depending on your folder structure)
app.use(express.static(path.join(__dirname, 'Content')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Set up logging
app.use(logger('dev'));

// Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cookie parsing middleware
app.use(cookieParser());

// Define Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

// Error handling middleware (handles 404)
app.use(function(req, res, next) {
  next(createError(404)); // Forward 404 error if no route matches
});

// General error handler (handles other errors)
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export the app to be used by the server
module.exports = app;
