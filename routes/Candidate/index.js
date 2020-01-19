const express = require('express');
const bodyParser = require('body-parser');

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
  const {aadhaarNumber} = req.body;

  const data = await Candidate.find({ aadhaarNumber });
  console.log(`data:${data}`);
  
  if (!data.length) {
    const dataCreated = await Candidate.create({...req.body});
    console.log(`dataCreated:${dataCreated}`);
  }else {
    res.render('Candidate/addCandidate.ejs',{data});
  }

  res.render('Candidate/addCandidate.ejs');
});

module.exports = router;
