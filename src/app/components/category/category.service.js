'use strict';

angular.module('feedReader')
  .factory('categoryService', ['$q', '$location', '$http', function($q, $location, $http) {

    var categoryData = {

      data: [],


      getCategoryData: function(input) {
        var deferred = $q.defer();
        var filteredSources = _.filter(categoryData.sources, function(source) {
          return _.includes(source.tags, input);
        });
        deferred.resolve(filteredSources);
        return deferred.promise;
      },

      sources: {
        'The Verge': {
          tags: ['News', 'Tech'],
          name: 'The Verge',
          icon: 'verge_icon.png',
          image: 'verge.png',
          source: 'http://theverge.com/rss/index.xml'
        },
        'New York Times': {
          tags: ['News'],
          name: 'New York Times',
          icon: 'nyt_icon.png',
          image: 'nyt.jpg',
          source: 'http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml'
        },
        'Consequence Of Sound': {
          tags: ['Music'],
          name: 'Consequence of Sound',
          icon: 'cos_icon.png',
          image: 'cos.jpg',
          source: 'http://consequenceofsound.net/category/news/feed/'
        },
        'Resident Advisor': {
          tags: ['Music'],
          name: 'Resident Advisor',
          icon: 'ra_icon.png',
          image: 'resident_advisor.jpg',
          source: ' http://www.residentadvisor.net/xml/the-feed.xml'
        },
        'CNN': {
          tags: ['News'],
          name: 'CNN',
          icon: 'cnn_icon.png',
          image: 'cnn.png',
          source: 'http://rss.cnn.com/rss/cnn_topstories.rss'
        },
        'Salon': {
          tags: ['News'],
          name: 'Salon',
          icon: 'salon_icon.jpg',
          image: 'salon.png',
          source: 'http://www.salon.com/feed/rss/'
        },
        'Pitchfork': {
          tags: ['News'],
          name: 'Pitchfork',
          icon: 'pitchfork_icon.jpeg',
          image: 'pitchfork.png',
          source: 'http://pitchfork.com/rss/news/'
        },
        'Hypetrak': {
          tags: ['Music'],
          name: 'Hypetrak',
          icon: 'hype_icon.jpg',
          image: 'hypetrak.jpg',
          source: 'http://hypetrak.com/feed/'
        },
        'GorillaVsBear': {
          tags: ['Music'],
          name: 'GorillaVsBear',
          icon: 'gorilla_icon.jpg',
          image: 'gorilla.jpeg',
          source: 'http://gorillavsbear.blogspot.com/atom.xml'
        },
        'Huffington Post': {
          tags: ['News'],
          name: 'Huffington Post',
          icon: 'huffpo_icon.png',
          image: 'huffpo.png',
          source: 'http://www.huffingtonpost.com/feeds/index.xml'
        },
        'Tech Crunch': {
          tags: ['Tech', 'News'],
          name: 'Tech Crunch',
          icon: 'techCrunch_icon.png',
          image: 'techCrunch.png',
          source: 'http://feeds.feedburner.com/TechCrunch/'
        },
        'ReadWrite': {
          tags: ['Tech', 'News'],
          name: 'ReadWrite',
          icon: 'readwrite.jpeg',
          image: 'readwrite-logo.png',
          source: 'http://www.specificfeeds.com/Readwrite'
        }
      },
      getRss: function(url) {
        var deferred = $q.defer();
        if (angular.isDefined(categoryData.data[url])) {
          deferred.resolve(categoryData.data[url]);
        } else {
          var req = $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
          req.success(function(data) {
            deferred.resolve(data.responseData.feed);
            categoryData.data[url] = data.responseData.feed;
          });
        }
        return deferred.promise;
      }
    };
    return categoryData;

  }]);
