newsSummaryApp.controller("NewsSummaryController", ["guardianService", function(guardianService) {
    var self = this;
    self.guardianService = guardianService;

    self.greeting = "Hello, world";
  }]);
