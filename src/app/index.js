'use strict';

angular.module('feedReader', ['ngAnimate', 'ngRoute', 'ngMaterial'])
  .config(function($routeProvider) {
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
      .when('/categories/:category/:feed', {
        templateUrl: 'app/components/feedDetail/feed.view.html',
        controller: 'FeedCtrl',
        resolve: {
          // this resolve is probably unnecessary.. need to figure 
          //out how to store data in service and delete data when navigation changes
          categoryData: ['$route', 'categoryService', function($route, categoryService) {
            var category = $route.current.params.category;
            return categoryService.getCategoryData(category);
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('blue-grey');
  }]);
