'use strict';

angular.module('feedReader')
  .factory('feedService', ['$http', function($http) {

    var feedObject = {

      getRss: function(url) {
        console.log('works');
        var data = $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        console.log(data);
        return data;
      }
    };

    return feedObject;

  }]);
