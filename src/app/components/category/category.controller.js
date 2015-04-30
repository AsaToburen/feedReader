'use strict';

angular.module('feedReader')
  .controller('CategoryCtrl', ['$scope', 'categoryService',
   function($scope, categoryService){
    console.log('CategoryCtrl');
    console.log(categoryService);

  }]);