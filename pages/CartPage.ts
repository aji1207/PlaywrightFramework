import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';

export class CartPage extends BasePage {

    

    async getProductPrice(productName: string) {

        return await this.page.locator(
            `//div[text()='${productName}']/ancestor::div[@class='cart_item']//div[@class='inventory_item_price']`
        ).textContent();
    }

    async checkout() {
        await this.page.locator('#checkout').click();
    }
    
    async getProductName() {

    return await this.page
        .locator('.inventory_item_name')
        .textContent();
}
}