'use strict';

angular.module('feedReader', ['ngAnimate', 'ngSanitize', 'ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/categories/:category', {
        templateUrl: 'app/components/category/category.view.html',
        controller: 'CategoryCtrl',
        resolve: {
          categoryData: ['$route', 'categoryService', function($route, categoryService) {
            var category = $route.current.params.category;
            return categoryService.getCategoryData(category);
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
