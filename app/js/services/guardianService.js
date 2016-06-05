newsSummaryApp.service('guardianService', ['$http','guardianFactory', function($http,guardianFactory){
  var self = this;

  self.getAllArticles = function() {
    return $http.get('http://content.guardianapis.com/search?from-date=2016-06-03&api-key=test').then(_handleApiResponse);
  };

  function _handleApiResponse(response) {
    return response.data.response.results.map(function(item){
      return new guardianFactory(item.webTitle, item.webPublicationDate, item.webUrl);
    });

  }

}]);
