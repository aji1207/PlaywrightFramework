import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';

export class ProductsPage extends   BasePage {
    

    async addProductToCart(productName: string) {

        const product = this.page.locator(
            `//div[text()='${productName}']/ancestor::div[@class='inventory_item']//button`
        );

        await product.click();
    }

    async openCart() {
        await this.page.locator('.shopping_cart_link').click();
    }
}