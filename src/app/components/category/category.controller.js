'use strict';

angular.module('feedReader')
  .controller('CategoryCtrl', ['$scope', '$http', '$location', '$q', 'categoryData', 'feedService', 'categoryService',
    function($scope, $http, $location, $q, categoryData, feedService, categoryService) {

      console.log(categoryData);

      $scope.sources = categoryData;
      $scope.getRss = categoryService.getRss;

  }]);
