import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';

export class CheckoutPage extends BasePage {

    
    async enterDetails() {

        await this.page.fill('#first-name', 'Ahamed');
        await this.page.fill('#last-name', 'Noorani');
        await this.page.fill('#postal-code', '600001');

        await this.page.click('#continue');
    }

    async getTotalPrice() {
        return await this.page.locator('.summary_total_label').textContent();
    }

    async finishOrder() {
        await this.page.click('#finish');
    }

    async getSuccessMessage() {
        return await this.page.locator('.complete-header').textContent();
    }
}