var app = angular.module('vwic',[]);

// function MainCtrl($scope, $http) {
//   $scope.formData = {};
//
//   $http.get('/')
//     .success(function() {
//       $scope.number1 = 60;
//       $scope.number2 = 100;
//       })
//     .error(function() {
//       console.log('Error');
//       });
// }

app.controller('MainCtrl', ['$scope',function($scope){
  $scope.number1 = 55;
  $scope.number2 = 88;
}]);
