var app = angular.module('InstaApp',['ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'AuthCtrl as authCtrl'
      })
      .when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'AuthCtrl as authCtrl'
      })
      .when('/profile', {
      	templateUrl: 'partials/profile.html',
      	controller: 'AuthCtrl as authCtrl'
      });
  }
 ]); // End config