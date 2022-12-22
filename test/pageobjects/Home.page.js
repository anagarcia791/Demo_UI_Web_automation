const Page = require("./Page");
const AjaxPage = require("./Ajax.page");
const ProgressBarPage = require("./ProgressBar.page");
const ShadowDomPage = require("./ShadowDom.page");

class Home extends Page {
  /**
   * Web elements
   */
  get ajaxLink() {
    return $("a[href*='ajax']");
  }

  get progressBarLink() {
    return $("a[href*='progress']");
  }

  get shadowDomLink() {
    return $("a[href*='shadow']");
  }

  /**
   * Methods
   */
  async open() {
    return await super.open("");
  }

  async goToAjaxPage() {
    await this.ajaxLink.click();
    return new AjaxPage();
  }

  async goToProgressBarPage() {
    await this.progressBarLink.click();
    return new ProgressBarPage();
  }

  async goToShadowDomPage() {
    await this.shadowDomLink.click();
    return new ShadowDomPage();
  }
}

module.exports = Home;
