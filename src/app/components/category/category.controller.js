'use strict';

angular.module('feedReader')
  .controller('CategoryCtrl', ['$scope', 'categoryData',
    function($scope, categoryData) {

      $scope.sources = categoryData;
      //$scope.getRss = categoryService.getRss;

}]);

