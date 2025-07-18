# playwright-poc

<img src="https://playwright.dev//img/playwright-logo.svg" height="50px" />

## [Playwright](https://playwright.dev/) POC

### Prerequisites

```bash
$ node --version
v16.13.2
$ npm --version
8.1.2
```

### 0. Setup

```bash
git clone https://github.com/danrusu/playwright-poc-old.git
cd playwright-demo
npm install
```

### 1. [All browsers test](./src/test/allBrowsersTest.js)

```bash
npm run browser-all
```

### 2. [Browser context test](./src/test/browserContextTest.js)

```bash
npm run browser-context
```

### 3. Record / Code generator

```bash
npx playwright codegen "http://qtools.ro"
```
