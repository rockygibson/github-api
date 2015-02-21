var app = angular.module('github-api');

app.controller('GitHubController', function($scope, githubService) {
    $scope.getUserData = function() {
        githubService.getUser($scope.searchText)
        .then(function(userProfile) {
        	console.log(userProfile)
            $scope.userProfile = userProfile
            
        })
    }

})
