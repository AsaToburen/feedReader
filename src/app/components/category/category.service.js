'use strict';

angular.module('feedReader')
  .factory('categoryService', ['$q', '$location', '$http', function($q, $location, $http) {

    var categoryData = {

      getCategoryData: function(input) {
        var deferred = $q.defer();
        //return _.findWhere(categoryData.sources, {tags: input});
        var filteredSources = _.filter(categoryData.sources, function(source) {
          return _.includes(source.tags, input);
        });
        deferred.resolve(filteredSources);
        return deferred.promise;
      },

      sources: [{
        tags: ['News', 'Tech'],
        description: 'See a list of assorted news sources.',
        showfull: true,
        name: 'The Verge',
        icon: 'verge_icon.png',
        source: 'http://theverge.com/rss/index.xml'
      }, {
        tags: ['Music', 'News'],
        description: 'See a list of assorted news sources.',
        showfull: true,
        name: 'Pitchfork',
        //icon: 'pitchfork_icon.png',
        source: 'http://pitchfork.com/rss/news/'
      }, {
        tags: ['Music'],
        description: 'See a list of assorted news sources.',
        showfull: true,
        name: 'Hypetrak',
        icon: 'hype_icon.jpg',
        source: 'http://hypetrak.com/feed/'
      }, {
        tags: ['Music'],
        description: 'See a list of assorted news sources.',
        showfull: true,
        name: 'GorillaVsBear',
        icon: 'gorilla_icon.jpg',
        source: 'http://gorillavsbear.blogspot.com/atom.xml'
      }, {
        tags: ['Music'],
        description: 'See a list of assorted news sources.',
        showfull: true,
        name: '',
        icon: '',
        source: ''
      }, {
        tags: ['Art', 'News'],
        description: 'See a list of assorted news sources.',
        showfull: true,
        name: '',
        source: ''
      }],

      getRss: function(url) {
        var deferred = $q.defer();

        console.log('works');
        console.log(url);
        var req = $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        
        console.log(req);
        req.success(function(data) {

          $location.path('/categories/' + categoryData.sources.tags + '/' + categoryData.sources.name);
          console.log(data);
        });

        return deferred.promise;
      }
    };

    return categoryData;

  }]);
