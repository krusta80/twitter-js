var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

router.get('/users/:name', function (req, res) {
  var tweets = tweetBank.find({name : req.params.name});
  res.render( 'index', { title: 'Twitter.js - Posts by ' + req.params.name, tweets: tweets } );
});

router.get('/tweets/:tweetID', function (req, res) {
  var tweets = tweetBank.find({tweetID : req.params.tweetID});
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});


module.exports = router;