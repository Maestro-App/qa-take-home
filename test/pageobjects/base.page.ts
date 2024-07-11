import { WaitTime } from "../constansts/const.ts";



export default class Basepage{


 /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
 open(path: string) {
    return browser.url(path);
}

 /**
   * Wait an element to exist
   * @param webElement @param waitFor
   */
 async waitElementToExist(webElement: WebdriverIO.Element, waitFor: number = WaitTime.SMALL) {
    await webElement.waitForExist({
        timeout: waitFor,
        timeoutMsg: `element no found${webElement.selector}`,
    });
}

  /**
  * Click on a web element
  * @param webElement
  */
  async clickOnElement(webElement: WebdriverIO.Element, timeout: number = WaitTime.SMALL) {
    await this.waitElementToExist(webElement, timeout);
    await webElement.click();
}

  /**
   * Send text to an element
   * @param webElement @param text
   */
  async sendTextToElement(webElement: WebdriverIO.Element, text: string, timeout: number = WaitTime.SMALL) {
    await this.waitElementToExist(webElement, timeout);
    await webElement.setValue(text);
}

    /**
     * Wait an element to be displayed
     * @param webElement @param waitFor
     */
    async waitElementToBeDisplayed(
        webElement: WebdriverIO.Element,
        waitFor: number = WaitTime.SMALL
    ) {
        await webElement.waitForDisplayed({
            timeout: waitFor,
            timeoutMsg: `element no displayed${webElement.selector}`,
        });
    }
        /**
   * Wait some seconds.
   * @param seconds : number
   */
        public async waitInSeconds(seconds: number) {
            return new Promise(resolve => setTimeout(resolve, seconds * 1000));
        }
}