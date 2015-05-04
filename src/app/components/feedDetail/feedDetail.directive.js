'use strict';

angular.module('feedReader')
  .directive('feedDetail', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/feedDetail/feedDetail.partial.html',
      replace: true,
      scope: true
    };
  });