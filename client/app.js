//create Angular module named 'myApp'
var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
  $scope.person = {
    name: "Chris"
  };
});