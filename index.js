/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const multer = require('multer');
// const app = require('./app');
const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

/**
 * Connecting with DB
 */
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/CMS_DB', (err, data) => {
//   if (err) { console.log('connection error', err); } else {
//     console.log('DB connected sucessfully');
//   }
// });
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds211099.mlab.com:11099/candidate-management-system`, (err, data) => {
  if (err) { console.log('connection error', err); } else {
    console.log('DB connected sucessfully');
  }
});

/**
 * Cloud Atlas
 */
// const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://jalak:C@aCdJ7CZgv$9kE@cluster0-wiof7.mongodb.net/test?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect((err) => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });

/**
 * Import model
 */
const Candidate = require('./models/Candidate');

/**
 * Import Routes
 */
const routes = require('./app');

app.use(routes);

// app.get('/', async (req, res) => {
//   res.end('done');
// });

app.listen(PORT, () => {
  console.log(`Server started at port:${PORT}`);
});
