const { chromium, firefox, webkit } = require('playwright');

jest.setTimeout(30000);

[chromium, firefox, webkit].forEach(browserDriver => {
  describe('qatools.ro tests', () => {
    let browser;
    let page;
    let context;

    beforeAll(async () => {
      browser = await browserDriver.launch({ headless: false, slowMo: 500 });
      context = await browser.newContext();
      page = await context.newPage();
      await page.goto('http://qatools.ro');
    });

    afterAll(async () => {
      browser.close();
    });

    test(`should load page on ${browserDriver.name()}`, async () => {
      expect(page).not.toBeNull();
      expect(page.tile).not.toBeNull();
    });
  });
});
