var express = require('express');
var router = express.Router();
var path = require('path');
var Story = require('../models/story');
var chance = require('chance').Chance();

router.get('/', function(req, res,next) {
  // res.render('story');
  Story.find(function(err,stories){
    if (err){
      return next(err);
    } else {
      // res.json(stories);
      res.sendFile(path.join(__dirname, '../views/stories.html'));
    }
  });
});

// router.param('story', function(req, res, next, story_id) {
//   var query = Story.findById(story_id);
//
//   query.exec(function (err, story){
//     if (err) { return next(err); }
//     if (!story) { return next(new Error('can\'t find story')); }
//
//     req.story = story;
//     return next();
//   });
// });

router.get('/:story_id',function(req,res){
  Story.find({storyId:req.params.story_id},function(err,data){
    if (err){
      console.log(err);
    } else {
      console.log('data: ' + data);
      //res.json(req.story);
      res.sendFile(path.join(__dirname, '../views/story.html'));
      // console.log('story: ' + data);
    }
  });
});

router.get('/new', function(req, res) {
  // res.render('story');
  res.sendFile(path.join(__dirname, '../views/edit.html'));
});

router.post('/',function(req,res,next){
  // var story = new Story({
  //   storyId : chance.natural({min:1, max:10000}).toString(),
  //   headline : req.body.headline,
  //   subject: req.body.subject,
  //   subject_img : req.body.subject_img,
  //   author: 'sophia',
  //   twitterAcc : req.body.twitterAcc,
  //   facebookAcc : req.body.facebookAcc,
  //   content : req.body.content
  // });
  var story = new Story(req.body)
  story.save(function (err,story){
    if (err){
      console.log(err);
      return next(err);
    } else {
      // res.render('story',story);
      console.log('Successfully save');
      res.json(story);
    }
    });
});

module.exports = router;
