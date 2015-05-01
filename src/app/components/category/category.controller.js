'use strict';

angular.module('feedReader')
  .controller('CategoryCtrl', ['$scope', 'categoryService',
   function($scope, categoryService){
    
    $scope.data = {

    },

    $scope.tech = {},

    $scope.music = {},

    $scope.health = {},

    $scope.food = {},

    $scope.art = {}


  }]);