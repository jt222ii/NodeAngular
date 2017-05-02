const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.Promise = Promise;
require('../DAL/helper.js');
const entry = require('../DAL/entryHandler.js');



/* GET api listing. */
router.get('/', (req, res) => {
  res.send('HELLO WORLD WELCOME TO THE API');
});

// Get posts
router.get('/posts', (req, res) => {
  entry.findAll()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).send(error);
    })
});

router.post('/newpost', (req, res) => {
  entry.add(req.body.name, req.body.message, req.body.imgurlinks);
  console.log(req.body.name + ": "+ req.body.message);
});


module.exports = router;