const express = require('express');
const { sessionChecker } = require('../middleware/auth');
const User = require('../models/users');
const fetch = require('node-fetch')

const router = express.Router();

router.get('/', async (req, res) => {
  fetch('https://api.spacexdata.com/v3/launches/upcoming', {method : "GET"})
  .then(res => res.json())
  .then(json => res.render('launches', {json : json, date : json.launch_date_local}));
});

module.exports = router;