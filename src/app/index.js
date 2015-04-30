'use strict';

angular.module('feedReader', ['ngAnimate', 'ngSanitize', 'ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/categories/:title', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      //  controller: 'CategoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
