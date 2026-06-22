import { Page, Locator } from '@playwright/test';

export class WaitUtil {

    static async waitForPageLoad(page: Page) {
        await page.waitForLoadState('networkidle');
    }

    static async waitForElement(locator: Locator) {
        await locator.waitFor({
            state: 'visible'
        });
    }

}