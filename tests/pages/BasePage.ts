import { expect, Locator, Page } from "@playwright/test";
import { PageHolder } from "./AbstractClasses";

export class BasePage extends PageHolder {
    constructor(page: Page) {
        super(page);
    }

    public async openPage(url: string): Promise<void> {
        await this.page.goto(url);
    }

    public async clickElementByLocator(locator: Locator): Promise<void> {
        await locator.click();
    }

    // Method to click on element only if it is visible
    public async clickElementIfVisibleByLocator(
        locator: Locator
    ): Promise<void> {
        if (await locator.isVisible()) {
            await locator.click();
        }
    }

    public async checkElementIsVisibleByLocator(
        locator: Locator,
        isVisible: boolean
    ): Promise<void> {
        if (isVisible) {
            await expect(locator).toBeVisible();
        } else {
            await expect(locator).not.toBeVisible();
        }
    }

    public async checkElementContainTextByLocator(
        locator: Locator,
        text: string
    ): Promise<void> {
        await expect(locator).toContainText(text);
    }

    public async checkElementIsDisabledByLocator(
        locator: Locator,
        isDisabled: boolean
    ): Promise<void> {
        if (isDisabled) {
            await expect(locator).toBeDisabled();
        } else {
            await expect(locator).not.toBeDisabled();
        }
    }

    public async fillInputFieldByLocator(
        locator: Locator,
        value: string
    ): Promise<void> {
        await locator.fill(value);
    }

    public async dragAndDropElementByLocator(draggable: Locator, target: Locator): Promise<void> {
        await draggable.first().dragTo(target.first());
    }

    public async submitFormByLocator(form: Locator): Promise<void> {
        await form.evaluate((el) => (el as HTMLFormElement).submit());
    }
}