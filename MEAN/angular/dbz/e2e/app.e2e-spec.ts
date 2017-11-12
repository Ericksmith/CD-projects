import { DbzPage } from './app.po';

describe('dbz App', () => {
  let page: DbzPage;

  beforeEach(() => {
    page = new DbzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
