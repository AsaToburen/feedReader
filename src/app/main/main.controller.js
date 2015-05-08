'use strict';

angular.module('feedReader')
  .controller('MainCtrl', ['$scope', 'categoryService',
    function($scope, categoryService) {

      $scope.addCategory = function() {
        console.log(this.text);
        if ($scope.text) {
          $scope.categories.push(this.text);
          $scope.text = '';
        }
      };

      $scope.categories = [{
        title: 'News',
        description: 'See a list of assorted news sources.',
        icon: 'earth.svg'
      }, {
        title: 'Tech',
        description: 'Check out the latest tech magazines.',
        icon: 'cellphone-link.svg'
      }, {
        title: 'Music',
        description: 'See a list of popular music blogs.',
        icon: 'headphones.svg'
      }, {
        title: 'Art',
        description: 'Lookup some popular art blogs.',
        icon: 'brush.svg'
      }, {
        title: 'Health',
        description: 'Stay informed on the latest informationa and health trends.',
        icon: 'dumbbell.svg'
      }, {
        title: 'Food',
        description: 'Take a look at some of the best food blogs.',
        icon: 'silverware-variant.svg'
      }];

      $scope.categoryData = categoryService;

    }
  ]);
