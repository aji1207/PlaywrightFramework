import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ===============================
    // Navigation Methods
    // ===============================

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async getCurrentUrl() {
        return this.page.url();
    }

    async refreshPage() {
        await this.page.reload();
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }

    // ===============================
    // Click Actions
    // ===============================

    async click(locator: Locator) {
        await locator.click();
    }

    async doubleClick(locator: Locator) {
        await locator.dblclick();
    }

    async rightClick(locator: Locator) {
        await locator.click({ button: 'right' });
    }

    async forceClick(locator: Locator) {
        await locator.click({ force: true });
    }

    // ===============================
    // Input Actions
    // ===============================

    async enterText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async appendText(locator: Locator, text: string) {
        await locator.pressSequentially(text);
    }

    async clearText(locator: Locator) {
        await locator.clear();
    }

    async getInputValue(locator: Locator) {
        return await locator.inputValue();
    }

    // ===============================
    // Dropdown Methods
    // ===============================

    async selectByText(locator: Locator, text: string) {
        await locator.selectOption({ label: text });
    }

    async selectByValue(locator: Locator, value: string) {
        await locator.selectOption(value);
    }

    async selectByIndex(locator: Locator, index: number) {
        await locator.selectOption({ index });
    }

    // ===============================
    // Checkbox & Radio
    // ===============================

    async check(locator: Locator) {
        await locator.check();
    }

    async uncheck(locator: Locator) {
        await locator.uncheck();
    }

    async isChecked(locator: Locator) {
        return await locator.isChecked();
    }

    // ===============================
    // Visibility Methods
    // ===============================

    async isVisible(locator: Locator) {
        return await locator.isVisible();
    }

    async isEnabled(locator: Locator) {
        return await locator.isEnabled();
    }

    async isDisabled(locator: Locator) {
        return !(await locator.isEnabled());
    }

    async scrollIntoView(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    // ===============================
    // Wait Methods
    // ===============================

    async waitForElement(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async waitForHidden(locator: Locator) {
        await locator.waitFor({ state: 'hidden' });
    }

    async waitForTimeout(milliseconds: number) {
        await this.page.waitForTimeout(milliseconds);
    }

    async waitForLoadState() {
        await this.page.waitForLoadState('networkidle');
    }

    // ===============================
    // Text Methods
    // ===============================

    async getText(locator: Locator) {
        return await locator.textContent();
    }

    async getAllTexts(locator: Locator) {
        return await locator.allTextContents();
    }

    async getCount(locator: Locator) {
        return await locator.count();
    }

    // ===============================
    // Assertions
    // ===============================

    async verifyText(locator: Locator, expectedText: string) {
        await expect(locator).toHaveText(expectedText);
    }

    async verifyContainsText(locator: Locator, text: string) {
        await expect(locator).toContainText(text);
    }

    async verifyVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async verifyHidden(locator: Locator) {
        await expect(locator).toBeHidden();
    }

    async verifyUrl(expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    async verifyTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    // ===============================
    // Mouse Actions
    // ===============================

    async hover(locator: Locator) {
        await locator.hover();
    }

    async dragAndDrop(source: Locator, target: Locator) {
        await source.dragTo(target);
    }

    // ===============================
    // Keyboard Actions
    // ===============================

    async pressKey(key: string) {
        await this.page.keyboard.press(key);
    }

    async pressEnter(locator: Locator) {
        await locator.press('Enter');
    }

    async pressTab(locator: Locator) {
        await locator.press('Tab');
    }

    // ===============================
    // Frames
    // ===============================

    async switchToFrame(frameName: string) {
        return this.page.frame(frameName);
    }

    // ===============================
    // Alerts
    // ===============================

    async acceptAlert() {
        this.page.on('dialog', async dialog => {
            await dialog.accept();
        });
    }

    async dismissAlert() {
        this.page.on('dialog', async dialog => {
            await dialog.dismiss();
        });
    }

    // ===============================
    // Screenshots
    // ===============================

    async captureScreenshot(name: string) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }

    // ===============================
    // File Upload
    // ===============================

    async uploadFile(locator: Locator, filePath: string) {
        await locator.setInputFiles(filePath);
    }

    // ===============================
    // Window Handling
    // ===============================

    async switchToNewTab() {
        const newPage = await this.page.context().waitForEvent('page');
        await newPage.waitForLoadState();
        return newPage;
    }

    // ===============================
    // Table Methods
    // ===============================

    async getTableRowCount(locator: Locator) {
        return await locator.locator('tr').count();
    }

    async getTableColumnCount(locator: Locator) {
        return await locator.locator('th').count();
    }
}