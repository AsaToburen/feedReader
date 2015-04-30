'use strict';

angular.module('feedReader')
  .directive('categories', function() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/components/category/category.partial.html',
      replace: true,
      scope: true,
    };
  });
