import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { IUserLoginData } from "tests/types/applicationFixture";

export class FrontendPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  public async loginFrontend(frontendLoginData: IUserLoginData): Promise<void> {
    await this.fillInputFieldByLocator(
      this.page.locator("#user_email"),
      frontendLoginData.username
    );
    await this.fillInputFieldByLocator(
      this.page.locator("#user_password"),
      frontendLoginData.password
    );
    await this.clickElementByLocator(
      this.page.locator('input[value="Login"]')
    );
  };
};