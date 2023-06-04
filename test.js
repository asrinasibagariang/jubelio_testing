const {By, Builder, Browser} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");
require('geckodriver');
require('chromedriver');

suite(function (env) {
  describe('First script', function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });

    after(async () => await driver.quit());

    it('Open login page', async function () {
      await driver.get('https://app.jubelio.com/');

      let title = await driver.getTitle();
      assert.equal("Jubelio", title);

      let emailTextBox = await driver.findElement(By.name('email'));
      let passwordTextBox = await driver.findElement(By.name('password'));
      let submitButton = await driver.findElement(By.css('.btn'));

      await emailTextBox.sendKeys('qa.rakamin.jubelio@gmail.com');
      await passwordTextBox.sendKeys('Jubelio123!');
      await submitButton.click();

    })

  });
}, { browsers: [Browser.CHROME, Browser.FIREFOX]});