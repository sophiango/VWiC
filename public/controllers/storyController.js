'use strict';

var app = angular.module('vwic',['ngRoute']);
// app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
//
//   $stateProvider
//     .state('stories', {
//       url: '/stories',
//       templateUrl: '/stories.html',
//       controller: 'StoryController'
//     });
//
//     .state('stories', {
//       url: '/stories/{story_id}',
//       templateUrl: '/story.html',
//       controller: 'StoryController'
//     });
//
//   $urlRouterProvider.otherwise('index');
// }]);


// app.controller('StoryController', ['$scope','$stateParams','stories',function($scope, $stateParams, stories){
//   $scope.story = stories.stories[$stateParams.story_id];
// }]);

app.config(['$routeProvider',
function($routeProvider) {
  $routeProvider
  .when('/AddNewStory', {
    templateUrl: '/views/edit.html',
    controller: 'AddNewStoryCtrl'
  })
  .when('/ShowStories', {
    templateUrl: '/views/stories.html',
    controller: 'ShowStoriesCtrl'
  })
  .when('/ShowStory/:storyId', {
    templateUrl: '/views/story.html',
    controller: 'ShowStoryCtrl'
  })
  .otherwise({
    redirectTo: '/ShowStories'
  });

}]);

// app.factory('stories',[function(){
//   var factory = {
//       stories:[]
//   };
//   return factory;
// }]);

app.controller('ShowStoriesCtrl',['$scope', '$http', function($scope, $http){
  $http.get('/stories')
  .success(function(response){
    console.log('all stories: ' + data);
    $scope.stories = response.data;
  })
  .error(function(response){
    console.log('Error:' + response.codeStatus);
  });
}]);

app.controller('AddNewStoryCtrl',['$scope', '$http', function($scope, $http){
  $scope.createStory = function(req,res) {
    $http.post('/story', $scope.formData)
    .success(function(data) {
      $scope.formData = {};
      $scope.story = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };
}]);


app.controller('ShowStoryCtrl',['$scope', '$http', function($scope, $http){
  // $scope.storyId = $routeParams.storyId;
  var storyId = $routeParams.storyId;
  $scope.getStoryById = function(storyId){
    $http.get('/story/' + storyId)
    .success(function(data){
      $scope.story = data;
      console.log('Data: ' + data);
    })
    .error(function(error){
      console.log('Error:' + error);
    });
  };
}]);

// app.controller('StoryController',['$scope', '$http', function($scope, $http){
//   $scope.formData = {};
//
//   $http.get('/story')
//     .success(function(data){
//       $scope.story = data;
//     })
//     .error(function(error){
//       console.log('Error:' + error);
//     });
//
//     $scope.getStoryById = function(story_id){
//       $http.get('/story/' + story_id)
//         .success(function(data){
//           $scope.story = data;
//           console.log('Data: ' + data);
//         })
//         .error(function(error){
//           console.log('Error:' + error);
//         });
//     };
//
//     $http.get('/story/' + story_id)
//       .success(function(data){
//         $scope.story = data;
//       })
//       .error(function(error){
//         console.log('Error:' + error);
//       });
//
//     $http.get('/story/new')
//       .success(function(){
//       })
//       .error(function(error){
//         console.log('Error:' + error);
//       });
//
//
//     $scope.createStory = function(req,res) {
//         $http.post('/story/new', $scope.formData)
//             .success(function(data) {
//                 $scope.formData = {};
//                 $scope.story = data;
//             })
//             .error(function(data) {
//                 console.log('Error: ' + data);
//             });
//     };
//
// }]);



// (function(){
//   var app = angular.module('vwic',[]);
//   // var Story = require('../models/story');
//   // var chance = require('chance').Chance();
//
//   app.factory('story',[function(){
//     var story = {};
//     return story;
//   }])
//
//   app.controller('StoryController',['$scope','$log','story',
//     function($scope,$log,story){
//       $scope.subject =  story.subject;
//       $scope.headline =  story.headline;
//     $scope.addStepOneInput = function(){
//       console.log('input: ' + $scope.subject);
//
//         // story.storyId = chance.natural({min:1, max:10000}).toString();
//         // story.headline = $scope.headline;
//         // story.subject= $scope.subject;
//         // story.subject_img = $scope.subject_img
//         // story.author= 'sophia'
//         // story.twitterAcc = $scope.twitterAcc,
//         // story.facebookAcc = $scope.facebookAcc,
//         // console.log('log= '+story.subject);
//     }
//   }]);
//
//   app.controller('StoryController',['$http',function getStory($scope, $http){
//       $scope.formData = {};
//       $http.get('/1234')
//         .success(function() {
//           $scope.subject='Kathy Pham';
//           $scope.headline='The woman in the White House';
//           console.log('OK');
//           })
//         .error(function() {
//           console.log('Error');
//           });
//   }]);
// })();
