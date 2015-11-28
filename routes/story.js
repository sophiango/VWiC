var express = require('express');
var router = express.Router();
var path = require('path');
var Story = require('../models/story');
var chance = require('chance').Chance();

router.get('/', function(req, res) {
  // res.render('story');
  Story.find(function(err,story){
    if (err){
      console.log(err);
    } else {
      res.sendFile(path.join(__dirname, '../views/story.html'));
    }
  });
});

// router.get('/:story_id',function(req,res){
//   Story.find({story_id:req.params.story_id},function(err,data){
//     if (err){
//       console.log(err);
//     } else {
//       res.json(data);
//     }
//   });
// });

router.get('/new', function(req, res) {
  // res.render('story');
  res.sendFile(path.join(__dirname, '../views/edit.html'));
});

router.post('/new',function(req,res){
  var story = new Story({
    storyId : chance.natural({min:1, max:10000}).toString(),
    headline : req.body.headline,
    subject: req.body.subject,
    subject_img : req.body.subject_img,
    author: 'sophia',
    twitterAcc : req.body.twitterAcc,
    facebookAcc : req.body.facebookAcc,
    content : req.body.content
  });
  story.save(function (err){
    if (err){
      console.log(err);
    } else {
      console.log('Successfully save');
    }
    });
});

module.exports = router;
