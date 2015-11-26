var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
  // res.render('story');
  res.sendFile(path.join(__dirname, '../views/story.html'));
});

router.get('/new', function(req, res, next) {
  // res.render('story');
  res.sendFile(path.join(__dirname, '../views/edit.html'));
});


module.exports = router;
