const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = Promise;
require('../DAL/helper.js');
const entry = require('../DAL/entryHandler.js');

//axios for http requests
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('HELLO WORLD WELCOME TO THE API');
});

// Get posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  entry.findAll()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).send(error);
    })
});


module.exports = router;