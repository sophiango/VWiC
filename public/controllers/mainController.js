var app = angular.module('vwic',[]);

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
