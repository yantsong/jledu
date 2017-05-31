import { JleduPage } from './app.po';

describe('jledu App', () => {
  let page: JleduPage;

  beforeEach(() => {
    page = new JleduPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
