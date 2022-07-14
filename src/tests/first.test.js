const { chromium } = require('playwright');

jest.setTimeout(30000);

describe('suite1', () => {
  let browser;
  let page;
  let context;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 500 });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://qatools.ro');
  });

  afterAll(async () => {
    browser.close();
  });

  test('should load page', async () => {
    expect(page).not.toBeNull();
    expect(page.tile).not.toBeNull();
  });
});
