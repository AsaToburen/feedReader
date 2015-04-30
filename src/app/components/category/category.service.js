'use strict';

angular.module('feedReader')
  .factory('categoryService', function() {

    var categoryData = {

      data: [{
        title: 'News',
        description: 'See a list of assorted news sources.',
        showfull: true,
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
      }],

      detailData : {

        news: [{
          name: 'CNN',
          feedUrl: ''
        }, {
          name: 'The Daily Beast',
          feedUrl: ''
        }, {
          name: 'The Dish',
          feedUrl: ''
        }],
        tech: [{
          name: 'The Verge',
          feedUrl: ''
        }, {
          name: 'Mashable',
          feedUrl: ''
        }, {
          name: 'Wired',
          feedUrl: ''
        }, {
          name: 'Tech Crunch',
          feedUrl: ''
        }, {
          name: 'Gizmodo',
          feedUrl: ''
        }],
        music: [{
          name: 'Hypetrak',
          feedUrl: ''
        }, {
          name: 'Mixmag',
          feedUrl: ''
        }, {
          name: 'Pitchfork',
          feedUrl: ''
        }, {
          name: 'Rollingstone',
          feedUrl: ''
        }, {
          name: 'Spin',
          feedUrl: ''
        }],
        art: [],
        health: [],
        food: []
      },
    };

    return categoryData;

  });
