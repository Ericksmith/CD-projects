import { DojoMailerPage } from './app.po';

describe('dojo-mailer App', () => {
  let page: DojoMailerPage;

  beforeEach(() => {
    page = new DojoMailerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
