const { chromium } = require('playwright');

const BROWSER_CONTEXTS_COUNT = 100;

(async () => {
  const browser = await chromium.launch({ headless: false });

  const tests = range(BROWSER_CONTEXTS_COUNT).map(async contextIndex => {
    const context = await browser.newContext();
    return logPageTitle(contextIndex, context);
  });

  await Promise.allSettled(tests);

  await Promise.allSettled(browser.contexts().map(context => context.close()));

  await browser.close();
  console.log('Browser contexts tests finished!');
})();

function range(size) {
  return [...Array(size).keys()];
}

async function logPageTitle(contextIndex, context) {
  const page = await context.newPage();
  await page.goto('http://qatools.ro');

  const titleElement = await page.$('h1');
  const titleText = await titleElement.textContent();
  console.log(
    `${context.browser()._browserType.name()}[${[
      contextIndex,
    ]}]: Page title: ${titleText}`,
  );
}
