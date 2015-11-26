var app = angular.module('vwic',[]);

app.controller('StoryCtrl', ['$scope',function($scope){
  $scope.name='Kathy Pham';
  $scope.title='The woman in the White House';
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
