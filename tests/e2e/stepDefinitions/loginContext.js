const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pageObjects/LoginPage')
const { HomePage } = require("../pageObjects/HomePage.js");
const { RegisterPage } = require("../pageObjects/RegisterPage.js");
const config=require("../../cucumber.conf.js")

const assert = require('assert')
const loginPage = new LoginPage()
const homePage = new HomePage()
const registerPage = new RegisterPage()

Given('the user has registered with username {string} and password {string}', async function (username, password) {
    await registerPage.goToRegisterPage();
    await registerPage.submitRegisterData(username, password, password);

  });

Given('the user has browsed to login page', async function () {
  await page.goto(loginPage.loginPageUrl)
});


When('the user logs in with valid username {string} and valid password {string}', async function (username, password) {
  await loginPage.login(username, password)
});

When('the user logs in with username {string} and password {string}', async function (username, password) {
  await loginPage.login(username, password)
});

Then('the user should be navigated to the search page', async function () {
  actualUrl=await page.url()
  assert.equal(
    config.tandoorURL,
    actualUrl,
    `Expected user to be navigated to home page but redirected to ${actualUrl}`
    )
});


Then('the user should be displayed the message {string}', async function (expectedMessage) {
  actualMessage=(await homePage.getSigninSuccessMessage()).split("\n")
  assert.equal(
    expectedMessage,
    actualMessage[0],
    `Expected error message to be ${expectedMessage} but received ${actualMessage}`
  )
});

Then('the user should be displayed the error message {string}', async function (expectedMessage) {
  actualMessage=await loginPage.getMessage()
  assert.equal(
    expectedMessage,
    actualMessage,
    `Expected error message to be ${expectedMessage} but received ${actualMessage}`
  )
});