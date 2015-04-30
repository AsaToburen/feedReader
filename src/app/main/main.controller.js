'use strict';

angular.module('feedReader')
  .controller('MainCtrl', ['$scope', 'feedService', function($scope, feedService) {

    $scope.categories = [{
      title: "News",
      description: "See a list of assorted news sources.",
      active: false,
      source: ""
    }, {
      title: "Tech",
      description: "See a list of assorted news sources.",
      active: false,
      source: ""
    }, {
      title: "Music",
      description: "See a list of assorted news sources.",
      active: false,
      source: ""
    }, {
      title: "Art",
      description: "See a list of assorted news sources.",
      active: false,
      source: ""
    }, {
      title: "Health",
      description: "See a list of assorted news sources.",
      active: false,
      source: ""
    }, {
      title: "Food",
      description: "See a list of assorted news sources.",
      active: false,
      source: ""
    }];

    $scope.setActive = function(category) {
      console.log($scope.categories);
      if (category.active === false) {
        category.active = true;
      } else {
        category.active = false;
      }
    };



  }]);
