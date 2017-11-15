import { NotesFrontEndPage } from './app.po';

describe('notes-front-end App', () => {
  let page: NotesFrontEndPage;

  beforeEach(() => {
    page = new NotesFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
