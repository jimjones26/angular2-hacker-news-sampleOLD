import { Angular2HackerNewsSamplePage } from './app.po';

describe('angular2-hacker-news-sample App', function() {
  let page: Angular2HackerNewsSamplePage;

  beforeEach(() => {
    page = new Angular2HackerNewsSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
