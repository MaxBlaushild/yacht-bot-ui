import { YachtBotUiPage } from './app.po';

describe('yacht-bot-ui App', () => {
  let page: YachtBotUiPage;

  beforeEach(() => {
    page = new YachtBotUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
