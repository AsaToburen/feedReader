'use strict';

angular.module('feedReader')
  .controller('CategoryCtrl', ['$scope', 'categoryData', 'categoryService',
    function($scope, categoryData, categoryService) {

      $scope.sources = categoryData;
      $scope.getRss = categoryService.getRss;

  }]);
