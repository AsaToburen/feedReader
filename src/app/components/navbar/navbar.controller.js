'use strict';

angular.module('feedReader')
  .controller('NavbarCtrl', ['$scope', 'feedService', function ($scope, feedService) {

    $scope.getRss = feedService.getRss;
    

    
  }]);
