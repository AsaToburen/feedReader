'use strict';

angular.module('feedReader')
  .controller('FeedCtrl', ['$scope', '$routeParams', 'categoryService',
    function($scope, $routeParams, categoryService) {

      var source = categoryService.sources[$routeParams.feed].source;

      var srcImg = categoryService.sources[$routeParams.feed].image;
      console.log(srcImg);

      categoryService.getRss(source).then(function(res) {
        $scope.feedHeading = res.description;
        $scope.feedEntries = res.entries;
      });
    }
  ]);
