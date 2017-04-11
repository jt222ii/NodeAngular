const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = Promise;
require('../DAL/helper.js');

//axios for http requests
const axios = require('axios');
//placeholder ---- change to mongodb later
const API = 'https://jsonplaceholder.typicode.com'

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('HELLO WORLD WELCOME TO THE API');
});

// Get posts
router.get('/posts', (req, res) => {
  for(let i = 0; i>50; i++)
  {

  }
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});


module.exports = router;