// cucumber.conf.js file

const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
require("dotenv").config()

const tandoorURL = process.env.APP_URL || "http://localhost/"

setDefaultTimeout(60000)

// launch the browser
BeforeAll(async function () {
  global.browser = await chromium.launch({
      headless: true,
  });
});

// close the browser
AfterAll(async function () {
   await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
  await global.page.close();
  await global.context.close();
});


module.exports = { tandoorURL };