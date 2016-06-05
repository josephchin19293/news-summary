newsSummaryApp.controller("NewsSummaryController", ["guardianService", "guardianFactory", function(guardianService, guardianFactory) {
    var self = this;

    guardianService.getAllArticles().then(function(articles){
      self.articles = articles;
    });
  }]);
