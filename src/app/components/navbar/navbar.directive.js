'use strict';

angular.module('feedReader')
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.partial.html',
      replace: true,
      scope: true
    };
  });