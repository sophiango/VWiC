var app = angular.module('vwic',[]);
// var Story = require('../models/story');
// var chance = require('chance').Chance();

app.controller('StoryController', ['$scope',function($scope){

  this.story = {};

  $scope.addStepOneInput = function(){
    console.log('input: ' + $scope.subject);

      // story.storyId = chance.natural({min:1, max:10000}).toString();
      // story.headline = $scope.headline;
      // story.subject= $scope.subject;
      // story.subject_img = $scope.subject_img
      // story.author= 'sophia'
      // story.twitterAcc = $scope.twitterAcc,
      // story.facebookAcc = $scope.facebookAcc,
      // console.log('log= '+story.subject);
  }

}]);

// function StoryCtrl($scope, $http) {
//   $scope.formData = {};
//
//   $http.get('/')
//     .success(function() {
//       $scope.name='Kathy Pham';
//       $scope.title='The woman in the White House';
//       console.log('OK');
//       })
//     .error(function() {
//       console.log('Error');
//       });
// }
