newsSummaryApp.service('guardianService', ['$http','guardianFactory', function($http,guardianFactory){
  var self = this;

  self.getAllArticles = function() {
    return $http.get('http://content.guardianapis.com/search?from-date=' + todaysDate() + '&show-fields=thumbnail,image&api-key=test').then(_handleApiResponse);
  };

  function todaysDate() {
    var d = new Date()
    var curr_year = d.getFullYear()
    var curr_month = d.getMonth()
    var curr_day = d.getDate()
    return (curr_year + "-" + curr_month + "-" + curr_day)
  }

  function _handleApiResponse(response) {
    return response.data.response.results.map(function(item){
      return new guardianFactory(item.webTitle, item.webPublicationDate, item.webUrl, item.fields.thumbnail);
    });

  }

}]);
