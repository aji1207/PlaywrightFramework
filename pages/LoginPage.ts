import { Page } from '@playwright/test';
import { LoginLocators } from '../locators/LoginLocators';
import { Logger } from '../utils/Logger';

export class LoginPage {

    constructor(private page: Page) {}

    async login(username: string, password: string) {

        Logger.info('Entering Username');

        await this.page.fill(
            LoginLocators.USERNAME_INPUT,
            username
        );

        Logger.info('Entering Password');

        await this.page.fill(
            LoginLocators.PASSWORD_INPUT,
            password
        );

        Logger.info('Clicking Login');

        await this.page.click(
            LoginLocators.LOGIN_BUTTON
        );
    }
}