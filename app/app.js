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
      .when('/add-form', {
        templateUrl: 'partials/addPicForm.html',
        controller: 'AddPicCtrl as addPicCtrl'
      })
      .when('/edit-form', {
        templateUrl: 'editPicForm.html',
        controller: 'EditPicCtrl as editPicCtrl'
      })
  }
 ]); // End config
