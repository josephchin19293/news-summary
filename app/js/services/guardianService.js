newsSummaryApp.service('guardianService', ['$http', function($http){
  var self = this;

  self.getAllArticles = function() {
    return $http.get('http://content.guardianapis.com/search?from-date=2016-06-03&api-key=test').then(_handleApiResponse);
  };

  function _handleApiResponse(response) {
    return response.data.results[0].type;
    // var articles = [];
    // for(var article in results.response) {
    //   articles.push(logInfo(article));
    // }
  }

  // var logInfo = function(item){
  //   new NewsItemFactory(item.webTitle, item.type, item.date);
  // };

}]);
