'use strict';

angular.module('feedReader')
  .controller('FeedCtrl', ['$scope', '$routeParams', 'categoryService', 'categoryData',
    function($scope, $routeParams, categoryService, categoryData) {

      $scope.tabs = categoryData;

      $scope.selectedIndex = 0;

      angular.forEach(categoryData, function(val, idx) {
        if (val.name == $routeParams.feed) {
          $scope.selectedIndex = idx;
        }
      });

      var source = categoryService.sources[$routeParams.feed].source;

      var srcImg = categoryService.sources[$routeParams.feed].image;


      $scope.changeFeed = function(source) {
        categoryService.getRss(source).then(function(res) {
          $scope.feedHeading = (res.title || res.description);
          $scope.feedEntries = res.entries;
          $scope.link = res.link;
        });
      };
    }
  ]);
