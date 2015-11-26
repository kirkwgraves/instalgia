var app = angular.module('InstaApp',['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'AuthCtrl as authCtrl'
      })
      .when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'AuthCtrl as authCtrl'
      })
      .when('/user-profile', {
        templateUrl: 'partials/userProfile.html',
        controller: 'ProfileCtrl as profileCtrl'
      })
  }
 ]); // End config
