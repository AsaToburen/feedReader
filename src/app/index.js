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
        controller: 'FeedCtrl'
        //resolve: {
        //  feedData: ['$route', 'feedService', 'categoryService', function($route, feedService, categoryService) {
        //    var feed = $route.current.params.feed;
        //    //console.log(feed);
        //    //var url = categoryService.
        //    //angular.forEach feed in categoryService.feed = feed /// get source
        //    //return feedService.getRss;
        //  }]
        //}
      })
      .otherwise({
        redirectTo: '/'
      });
  });
