import { E09MessagesPage } from './app.po';

describe('e09-messages App', function() {
  let page: E09MessagesPage;

  beforeEach(() => {
    page = new E09MessagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
