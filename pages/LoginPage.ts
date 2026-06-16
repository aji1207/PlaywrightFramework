import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';

export class LoginPage {

    constructor(private page: Page) {}

    username = '#user-name';
    password = '#password';
    loginBtn = '#login-button';

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async login(user: string, pass: string) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginBtn);
    }
}