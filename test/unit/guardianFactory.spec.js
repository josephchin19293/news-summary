describe('guardianFactory', function() {

  beforeEach(module('newsSummaryApp'));

  var title = "title";
  var date = "date";
  var url = "url";
  var newsItem;

  beforeEach(inject(function(guardianFactory) {
    newsItem = new guardianFactory(title, date, url);
  }));

  it('can construct a news article with a title', function() {
    expect(newsItem.Title).toEqual("title");
  });

  it('can construct a news article with a date', function() {
    expect(newsItem.Date).toEqual("date");
  });

  it('can construct a news article with a url', function() {
    expect(newsItem.url).toEqual("url");
  });
});
