newsSummaryApp.factory('guardianFactory', function() {
  var newsItem = function(title, date, url, image) {
    this.title = title;
    this.date = date;
    this.url = url;
    this.image = image;
  };
  return newsItem;
});
