const HomePage = require("../pageobjects/Home.page");

describe("UI testing", () => {
  let homePage;

  beforeEach(async () => {
    homePage = new HomePage();
    await homePage.open();
  });

  it("Positive case - should go to progress bar page and interact there", async () => {
    const ProgressBarPage = await homePage.goToProgressBarPage();
    await ProgressBarPage.triggeringStartBtn();
    await ProgressBarPage.checkProgressBar();
    await ProgressBarPage.triggeringStopBtn();

    await expect(await ProgressBarPage.getTextResult()).toContain("Result: 0");
  });

  it("Bug case - should go to ajax page and check the message is shown more than once", async () => {
    const AjaxPage = await homePage.goToAjaxPage();
    await AjaxPage.triggeringAjaxBtn(); // 1rts click
    await AjaxPage.triggeringAjaxBtn(); // 2nd click
    await AjaxPage.isSuccessMsgDisplayed();

    await expect(AjaxPage.successMsg[1]).toHaveText(
      "Data loaded with AJAX get request."
    );
    await expect(await AjaxPage.successMsg.length).toEqual(2);
  });

  it("Bug case - should go to shadow dom page and check copy btn doesn't works", async () => {
    const ShadowDomPage = await homePage.goToShadowDomPage();
    await ShadowDomPage.triggeringGenerateBtn();
    await ShadowDomPage.triggeringCopyBtn();
    const inputValue = await ShadowDomPage.getInputFieldValue();
    await ShadowDomPage.getInputFieldCleared();
    await ShadowDomPage.pasteInfoIntoInputField();
    const inputValueAfterPaste = await ShadowDomPage.getInputFieldValue();
    await expect(inputValue).not.toEqual(inputValueAfterPaste);
  });
});
