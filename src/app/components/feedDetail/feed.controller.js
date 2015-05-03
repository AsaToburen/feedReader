'use strict';

angular.module('feedReader')
  .controller('FeedCtrl', ['$scope', 'feedService', function($scope, feedService) {
    console.log('feedCtrl');
    
    $scope.feedData = feedService.responseData.feed.entries;
    //$scope.feedArray = feedService.responseData.feed.entries;

  }]);
