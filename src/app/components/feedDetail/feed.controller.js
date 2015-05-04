'use strict';

angular.module('feedReader')
  .controller('FeedCtrl', ['$scope', 'categoryService', function($scope, categoryService) {
    
    $scope.feedHeading = categoryService.feed.responseData.feed.description;
    $scope.feedEntries = categoryService.feed.responseData.feed.entries;
    console.log(categoryService.feed.responseData.feed);



  }]);
