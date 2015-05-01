'use strict';

angular.module('feedReader')
  .controller('MainCtrl', ['$scope', 'feedService', 'categoryService',
    function($scope, feedService, categoryService) {

      $scope.categories = categoryService.data;

      //$scope.expand = function(category) {
      //  angular.forEach($scope.categories, function(i) {
      //    if (i === category) {
      //      i.showfull = true;
      //      i.active = true;
      //    } else {
      //      i.showfull = false;
      //    }
      //  });
      //};
      //
      //$scope.collapse = function(category) {
      //  angular.forEach($scope.categories, function(i) {
      //    i.showfull = true;
      //    i.active = null;
      //  });
      //};

      $scope.categoryData = categoryService;
      console.log(categoryService);

}]);
