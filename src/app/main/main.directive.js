'use strict';

angular.module('feedReader')
  .directive('categories', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/main/main.partial.html',
      replace: true,
      scope: true,
    };
  });
