'use strict';

angular.module('feedReader')
  .factory('categoryService', ['$q', '$location', '$http', function($q, $location, $http) {

    var categoryData = {

      feed: {},

      getCategoryData: function(input) {
        var deferred = $q.defer();
        var filteredSources = _.filter(categoryData.sources, function(source) {
          return _.includes(source.tags, input);
        });
        deferred.resolve(filteredSources);
        return deferred.promise;
      },

      sources: [{
        tags: ['News', 'Tech'],
        name: 'The Verge',
        icon: 'verge_icon.png',
        image: 'verge.png',
        source: 'http://theverge.com/rss/index.xml'
      }, {
        tags: ['News'],
        name: 'New York Times',
        icon: 'nyt_icon.png',
        image: 'nyt.jpg',
        source: 'http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml'
      }, {
        tags: ['Music'],
        name: 'Consequence of Sound',
        icon: 'cos_icon.png',
        image: 'cos.jpg',
        source: 'http://consequenceofsound.net/category/news/feed/'
      }, {
        tags: ['Music'],
        name: 'Resident Advisor',
        icon: 'ra_icon.png',
        image: 'resident_advisor.jpg',
        source: ' http://www.residentadvisor.net/xml/the-feed.xml'
      }, {
        tags: ['News'],
        name: 'CNN',
        icon: 'cnn_icon.png',
        image: 'cnn.png',
        source: 'http://rss.cnn.com/rss/cnn_topstories.rss'
      }, {
        tags: ['News'],
        name: 'Salon',
        icon: 'salon_icon.jpg',
        image: 'salon.png',
        source: 'http://www.salon.com/feed/rss/'
      }, {
        tags: ['News'],
        name: 'Pitchfork',
        icon: 'pitchfork_icon.jpeg',
        image: 'pitchfork.png',
        source: 'http://pitchfork.com/rss/news/'
      }, {
        tags: ['Music'],
        name: 'Hypetrak',
        icon: 'hype_icon.jpg',
        image: 'hypetrak.jpg',
        source: 'http://hypetrak.com/feed/'
      }, {
        tags: ['Music'],
        name: 'GorillaVsBear',
        icon: 'gorilla_icon.jpg',
        image: 'gorilla.jpeg',
        source: 'http://gorillavsbear.blogspot.com/atom.xml'
      }, {
        tags: ['News'],
        name: 'Huffington Post',
        icon: 'huffpo_icon.png',
        image: 'huffpo.png',
        source: 'http://www.huffingtonpost.com/feeds/index.xml'
      }, {
        tags: ['Tech', 'News'],
        name: 'Tech Crunch',
        icon: 'techCrunch_icon.png',
        image: 'techCrunch.png',
        source: 'http://feeds.feedburner.com/TechCrunch/'
      }, {
        tags: ['Tech', 'News'],
        name: 'ReadWrite',
        icon: 'readwrite.jpeg',
        image: 'readwrite-logo.png',
        source: 'http://www.specificfeeds.com/Readwrite'
      }],

      getRss: function(url) {

        var deferred = $q.defer();

        var req = $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));

        req.success(function(data) {
          categoryData.feed = data;

          $location.path('/categories/' + categoryData.sources.tags + '/' + categoryData.sources.name);
        });

        return deferred.promise;
      }
    };

    return categoryData;

  }]);
