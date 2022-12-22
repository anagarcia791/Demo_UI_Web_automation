const Page = require("./Page");

module.exports = class ProgressBarPage extends Page {
  /**
   * Web elements
   */
  get startBtn() {
    return $("#startButton");
  }
  get stopBtn() {
    return $("#stopButton");
  }
  get progressBar() {
    return $("#progressBar");
  }
  get result() {
    return $("#result");
  }

  /**
   * Methods
   */
  async triggeringStartBtn() {
    await this.startBtn.click();
  }

  async checkProgressBar() {
    await browser.waitUntil(
      async () => (await this.progressBar.getText()) === "75%",
      {
        timeout: 25000,
        interval: 100,
        timeoutMsg: "expected text to be different after 5s",
      }
    );
  }

  async triggeringStopBtn() {
    await this.stopBtn.click();
  }

  async getTextResult() {
    return await this.result.getText();
  }
};
