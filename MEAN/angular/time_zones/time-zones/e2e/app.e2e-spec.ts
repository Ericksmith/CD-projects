import { TimeZonesPage } from './app.po';

describe('time-zones App', () => {
  let page: TimeZonesPage;

  beforeEach(() => {
    page = new TimeZonesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
