var app = angular.module('github-api');

app.service('githubService', function($http, $q) {
    var id = "3257a93c96b37cf80ae9";
    var sec = "45becb1dda65f5af435cb81048b8791bd02440f9";
    var param = "?client_id=" + id + "&client_secret=" + sec;

    this.getUser = function(username) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/' + username + param,
        }).then(function(response) {
            var data = response.data
            var userProfile = {}

            userProfile.picture = data.avatar_url
            userProfile.name = data.name
            userProfile.username = data.login
            userProfile.repos = data.public_repos
            userProfile.followers = data.followers
            userProfile.following = data.following

            deferred.resolve(userProfile)
        })
        return deferred.promise
    }
})



