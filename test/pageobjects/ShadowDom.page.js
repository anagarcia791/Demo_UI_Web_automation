const Page = require("./Page");

module.exports = class ShadowDomPage extends Page {
  /**
   * Web elements
   */
  get inputField() {
    return $("guid-generator").shadow$("#editField");
  }

  get generateBtn() {
    return $("guid-generator").shadow$("#buttonGenerate");
  }

  get copyBtn() {
    return $("guid-generator").shadow$("#buttonCopy");
  }

  /**
   * Methods
   */
  async triggeringGenerateBtn() {
    await this.generateBtn.waitForClickable();
    await this.generateBtn.click();
  }

  async triggeringCopyBtn() {
    await this.copyBtn.click();
  }

  async getInputFieldValue() {
    return await this.inputField.getValue();
  }

  async getInputFieldCleared() {
    await this.inputField.clearValue();
  }

  async pasteInfoIntoInputField() {
    await this.inputField.click();
    await browser.keys(["Control", "v"]);
  }
};
