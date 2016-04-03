//create Angular module named 'myApp'
var app = angular.module('myApp', []);

app.controller('FormController', function($scope, $http) {
	// $scope.user = {handle: $scope.user}
	$scope.twitterHandle = {};

	$scope.postHandle = function() {
		console.log('scope twitterHandle', $scope.twitterHandle);
		var tweets = JSON.stringify($scope.twitterHandle);
		console.log('Posting Handle', tweets);
		$http.post('/', tweets).then(function(tweets) {
			console.log(tweets.data.statuses[0].text);
		});
	}
});