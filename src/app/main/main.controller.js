'use strict';

angular.module('feedReader')
  .controller('MainCtrl', ['$scope', 'feedService', 'categoryService',
    function($scope, feedService, categoryService) {

      $scope.categories = [{
        title: 'News',
        description: 'See a list of assorted news sources.',
        
        source: ''
      }, {
        title: 'Tech',
        description: 'See a list of assorted news sources.',
        showfull: true,
        source: ''
      }, {
        title: 'Music',
        description: 'See a list of assorted news sources.',
        showfull: true,
        source: ''
      }, {
        title: 'Art',
        description: 'See a list of assorted news sources.',
        showfull: true,
        source: ''
      }, {
        title: 'Health',
        description: 'See a list of assorted news sources.',
        showfull: true,
        source: ''
      }, {
        title: 'Food',
        description: 'See a list of assorted news sources.',
        showfull: true,
        source: ''
      }];


    $scope.categoryData = categoryService;
    console.log(categoryService);

  }]);
