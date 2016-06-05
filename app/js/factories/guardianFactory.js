newsSummaryApp.factory('guardianFactory', function() {
  var newsItem = function(title, date, url) {
    this.title = title;
    this.date = date;
    this.url = url;
  };
  return newsItem;
});
