'use strict';

angular.module('feedReader')
  .controller('FeedCtrl', ['$scope', '$routeParams', 'categoryService', 'categoryData',
    function($scope, $routeParams, categoryService, categoryData) {

      $scope.tabs = categoryData;
      console.log(categoryData);

      var source = categoryService.sources[$routeParams.feed].source;

      var srcImg = categoryService.sources[$routeParams.feed].image;

      categoryService.getRss(source).then(function(res) {
        $scope.feedHeading = ( res.title || res.description );
        $scope.feedEntries = res.entries;
        $scope.link = res.link;
        console.log(res.link);
        console.log(res);
      });
    }
  ]);
