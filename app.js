var app = angular.module('InstaApp',['ngRoute', 'firebase', 'ui.bootstrap']);

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
        controller: 'ProfileCtrl as profileCtrl'
      })
      .when('/addPicForm', {
      	templateUrl: 'partials/addPicForm.html',
      	controller: 'AddPicCtrl as addPicCtrl'
      });
  }
 ]); // End config
