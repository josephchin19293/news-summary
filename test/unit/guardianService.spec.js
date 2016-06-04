describe('guardian api', function(){
  beforeEach(module("newsSummaryApp"));

  var guardianService, httpBackend;
  var todaysDate = "2016-06-03";
  var todaysArticles = {results:[{type:"liveblog"}]};

  beforeEach(inject(function(_guardianService_, $httpBackend){
    guardianService = _guardianService_;
    httpBackend = $httpBackend;
  }));

  it('receives todays articles from the guardian api', function(){
    httpBackend.expectGET("http://content.guardianapis.com/search?from-date="+todaysDate+"&api-key=test").respond(todaysArticles);
    guardianService.getAllArticles().then(function(articles){
      expect(articles).toEqual('liveblog');
    });
    httpBackend.flush();
  });


});
