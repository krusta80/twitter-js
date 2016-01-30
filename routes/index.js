var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('../stylesheets/style.css', function (req, res) {
  console.log(__dirname + '/stylesheets/style.css');
  res.sendFile(__dirname + '/stylesheets/style.css');
});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});


module.exports = router;