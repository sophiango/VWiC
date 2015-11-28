var app = angular.module('vwic',[]);

// configuring our routes
// =============================================================================
// app.config(['$stateProvider',function($stateProvider, $urlRouterProvider) {
//
//     $stateProvider
//
//         // route to show our basic form (/form)
//         .state('story', {
//             url: '../views/form.html',
//             templateUrl: 'form.html',
//             controller: 'StoryController'
//         })
//
//         // nested states
//         // each of these sections will have their own view
//         // url will be nested (/form/profile)
//         .state('story.step1', {
//             url: '../views/step1.html',
//             templateUrl: 'step1.html'
//         })
//
//         // url will be /form/interests
//         .state('story.step2', {
//             url: '/step2',
//             templateUrl: 'step2.html'
//         })
//
//         // url will be /form/payment
//         .state('story.step3', {
//             url: '/step3',
//             templateUrl: 'step3.html'
//         })
//
//         .state('story.step4', {
//             url: '/step4',
//             templateUrl: 'step4.html'
//         })
//
//     // catch all route
//     // send users to the form page
//     $urlRouterProvider.otherwise('/story/step1');
// }]);

app.controller('StoryController',['$scope', '$http', function($scope, $http){
  $scope.formData = {};

  $http.get('/story')
    .success(function(data){
      $scope.story = data;
    })
    .error(function(error){
      console.log('Error:' + error);
    });

  // $http.get('/story/:story_id')
  //   .success(function(data){
  //     $scope.story = data;
  //     console.log(data);
  //   })
  //   .error(function(data){
  //     console.log('Error:' + data);
  //   });

    $scope.createStory = function() {
        $http.post('/story/new', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.story = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}]);



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
