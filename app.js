const express = require('express');
const volleyball = require('volleyball');
const expressSession = require('express-session');
const path = require('path');
const multer = require('multer');
const CandidateRoute = require('./routes/Candidate/index.js');

const app = express();

const storage = multer.diskStorage(
  {
    destination(req, file, cb) { cb(null, 'uploads/'); },
    filename(req, file, cb) { cb(null, file.originalname); },
  },
);

const upload = multer({ storage });

app.use(expressSession({
  secret: 'Rusty is the best dog in the world', // is used to enco-deco information in the session
  resave: false,
  saveUninitialized: false,
}));
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/uploads`));
app.use(volleyball);

/**
 * Route files
 */
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});
app.use('/', CandidateRoute);

module.exports = app;
