import { Page, expect } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class ProductPage {

    constructor(private page: Page) {}

    async addProductToCart(productName: string) {

        Logger.info(`Adding ${productName}`);

        await this.page.locator(
            `.inventory_item:has-text("${productName}") button`
        ).click();
    }

    async verifyCartCount(count: string) {

        await expect(
            this.page.locator('.shopping_cart_badge')
        ).toHaveText(count);
    }

    async openCart() {

        await this.page.click('.shopping_cart_link');
    }
}