var vwic = angular.module("vwic",[]);

function mainController($scope, $http) {
  $scope.formData = {};

  $http.get('/')
    .success(function() {
      $scope.title = 'VWiC Official website of Vietnamese Women in Computing';
      console.log('OK');
      })
    .error(function() {
      console.log('Error');
      });
}
