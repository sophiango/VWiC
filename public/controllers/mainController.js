'use strict';

var app = angular.module('vwic',['ngRoute']);

// app.config([
// '$stateProvider',
// '$urlRouterProvider',
// function($stateProvider, $urlRouterProvider) {
//
//   $stateProvider
//     .state('index', {
//       url: '/index',
//       templateUrl: '/index.html',
//       controller: 'MainController'
//     });
//
//   $urlRouterProvider.otherwise('index');
// }]);

app.controller('MainController', ['$scope', '$http',function($scope,$http){
  $http.get('/')
    .success(function() {
      $scope.number1 = 60;
      $scope.number2 = 100;
      })
    .error(function() {
      console.log('Error');
      });
}]);
