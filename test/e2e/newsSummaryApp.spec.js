describe("newsSummaryApp", function(){
  it("shows all articles", function(){
    browser.get('/');
    var test = "Media Monkey: Radio Times’s Euro 2016 dilemma and BBC’s raunchy Versailles See full article Date Published: 2016-06-05T17:20:46Z\nNigel Farage: migrant sex attacks to be nuclear bomb of EU referendum See full article Date Published: 2016-06-05T17:03:38Z\nFrom Sharon Horgan to Jo Brand: women take the comedy throne at C4 See full article Date Published: 2016-06-05T17:02:45Z\n‘Bible of trends’ for the media industry charts more famine than feast See full article Date Published: 2016-06-05T17:01:45Z\nMike Ashley agrees to appear in front of MPs See full article Date Published: 2016-06-05T17:00:17Z\nMother wants inquiry into role of pollution in daughter's asthma death See full article Date Published: 2016-06-05T16:49:43Z\nFrench Open men's final: Novak Djokovic beats Andy Murray to win title – as it happened See full article Date Published: 2016-06-05T16:42:12Z\nAnti-muzak campaigner enjoys the sound of silence inside M&S See full article Date Published: 2016-06-05T16:36:24Z\nBernie Sanders refuses to back down as Clinton on verge of victory See full article Date Published: 2016-06-05T16:34:14Z \nWales outclassed by Sweden in Euro 2016 warm-up See full article Date Published: 2016-06-05T16:31:19Z";
    var articles = $('#articles');
    expect(articles.getText()).toEqual(test);
  });
});
