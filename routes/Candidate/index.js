const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Candidate = require('../../models/Candidate');
// router.use(methodOverride('_method'));

/**
 * Homepage
 */
router.get('/', async (req, res) => {
  res.render('index.ejs');
});

/**
 * Add new candidate form
 */
router.get('/addCandidate', async (req, res) => {
  res.render('Candidate/addCandidate.ejs');
});

/**
 * Add new candidate on submit
 */
router.post('/addCandidate', async (req, res) => {
  // console.log(req.body);
  const { aadhaarNumber } = req.body;

  const data = await Candidate.find({ aadhaarNumber });
  console.log(`data:${data}`);

  if (!data.length) {
    let { address } = req.body;
    const { body } = req;

    address = address.split(',');
    console.log(address);
    const country = address[address.length - 1];
    const state = address[address.length - 2];
    const city = address[address.length - 3];
    const addressLine1 = address.slice(0, address.length - 3).join('');

    body.country = country;
    body.state = state;
    body.city = city;
    body.addressLine1 = addressLine1;

    const dataCreated = await Candidate.create({ ...body });
    // console.log(`dataCreated:${dataCreated}`);
    return res.render('Candidate/addCandidate.ejs', { data });
  }
  return res.status(400).json({ message: 'aadhaarNumber already exists' });
});

/**
 * Get all candidates
 */
router.get('/getAllCandidates', async (req, res) => {
  const data = await Candidate.find({}, {}, { sort: { created_at: -1 } });

  console.log(`data:${data}`);

  return res.render('Candidate/viewAllCandidates.ejs', { data });
});


module.exports = router;
