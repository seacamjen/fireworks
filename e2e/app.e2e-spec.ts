import { FireworksPage } from './app.po';

describe('fireworks App', () => {
  let page: FireworksPage;

  beforeEach(() => {
    page = new FireworksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
