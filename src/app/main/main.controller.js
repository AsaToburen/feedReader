'use strict';

angular.module('feedReader')
  .controller('MainCtrl', ['$scope', 'feedService', function($scope, feedService) {

    $scope.categories = [{
      title: "News",
      description: "See a list of assorted news sources.",
      showfull: true,
      source: ""
    }, {
      title: "Tech",
      description: "See a list of assorted news sources.",
      showfull: true,
      source: ""
    }, {
      title: "Music",
      description: "See a list of assorted news sources.",
      showfull: true,
      source: ""
    }, {
      title: "Art",
      description: "See a list of assorted news sources.",
      showfull: true,
      source: ""
    }, {
      title: "Health",
      description: "See a list of assorted news sources.",
      showfull: true,
      source: ""
    }, {
      title: "Food",
      description: "See a list of assorted news sources.",
      showfull: true,
      source: ""
    }];

    $scope.expand = function(category) {
      angular.forEach($scope.categories, function(i) {
        if (i === category) {
          i.showfull = true;
          i.active = true;
        } else {
          i.showfull = false;
        }
      });
    };


    $scope.collapse = function(category) {
      angular.forEach($scope.categories, function(i) {
        i.showfull = true;
        i.active = null;
      });
    };

    
    //angular.forEach($scope.categories, function(i) {
    //    i.showfull = true;
    //    i.active = false;
    //});






  }]);
