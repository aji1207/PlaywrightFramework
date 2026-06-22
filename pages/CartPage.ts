import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async verifyProduct(productName: string) {

        await expect(
            this.page.locator('.inventory_item_name')
        ).toContainText(productName);
    }

    async checkout() {

        await this.page.click('#checkout');
    }
}