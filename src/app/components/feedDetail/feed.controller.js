'use strict';

angular.module('feedReader')
  .controller('FeedCtrl', ['$scope', '$routeParams', 'categoryService',
    function($scope, $routeParams, categoryService) {

      var source = categoryService.sources[$routeParams.feed].source;

      var srcImg = categoryService.sources[$routeParams.feed].image;

      categoryService.getRss(source).then(function(res) {
        console.log('getting Source');
        console.log(res);
        $scope.feedHeading = (res.description || res.title);
        $scope.feedEntries = res.entries;
      });
    }
  ]);
