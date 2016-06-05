describe("newsSummaryApp", function(){
  it("shows all articles", function(){
    browser.get('/');
    var articles = $('#articles');
    expect(articles.getText()).toEqual('test');
  });
});
