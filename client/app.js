//create Angular module named 'myApp'
var app = angular.module('myApp', []);

app.controller('FormController', function($scope) {
	$scope.user = {handle: $scope.user}

	$scope.postHandle = function() {
		console.log('posting handle', $scope.twitterHandle);
	}
})

// app.controller('PostHandle', function($scope) {
// 	$scope.PostHandle = function() {
// 		console.log('POSTING HANDLE');
// 	}
// })

// app.postHandle = function() {

// }

// app.displayTweets = function() {

// }