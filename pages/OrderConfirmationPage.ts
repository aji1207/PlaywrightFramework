import { Page, expect } from '@playwright/test';

export class OrderConfirmationPage {

    constructor(private page: Page) {}

    async verifyOrderSuccess() {

        await expect(
            this.page.locator('.complete-header')
        ).toHaveText('Thank you for your order!');
    }
}