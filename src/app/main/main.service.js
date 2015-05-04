'use strict';

angular.module('feedReader')
  .factory('feedService', ['$http', function($http) {

    var rssObj = {

      getNews: function(url) {

        var data = $http.jsonp('//ajax.googleapis.com/ajax/services/' +
          'feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' +
          encodeURIComponent('http://feeds.huffingtonpost.com/huffingtonpost/raw_feed'));

        console.log(data);

        return data;
      }
    };

    return rssObj;

  }]);
