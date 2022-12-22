const Page = require("./Page");

module.exports = class AjaxPage extends Page {
  /**
   * Web elements
   */
  get ajaxBtn() {
    return $("#ajaxButton");
  }

  get successMsg() {
    return $$("#content p");
  }

  /**
   * Methods
   */
  async triggeringAjaxBtn() {
    await this.ajaxBtn.waitForClickable({ timeout: 2000 });
    await this.ajaxBtn.click();
  }

  async isSuccessMsgDisplayed() {
    return await browser.waitUntil(
      async () => (await this.successMsg.length) === 2,
      {
        timeout: 45000,
        interval: 5000,
        timeoutMsg: "expected text to be different after 5s",
      }
    );
  }
};
