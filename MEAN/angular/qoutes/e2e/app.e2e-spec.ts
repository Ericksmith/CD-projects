import { QoutesPage } from './app.po';

describe('qoutes App', () => {
  let page: QoutesPage;

  beforeEach(() => {
    page = new QoutesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
