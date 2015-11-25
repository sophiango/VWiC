var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile('/Users/sophiango/Documents/NodeWorkspace/VWiC-2/views/index.html');
  res.sendFile(path.join(__dirname, '../views/index.html'));
  // res.render('index', { title: 'Express' });
});

router.get('/story', function(req, res, next) {
  // res.render('story');
  res.sendFile(path.join(__dirname, '../views/story.html'));
});


module.exports = router;
