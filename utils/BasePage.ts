import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigation
    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    // Click Actions
    async click(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }

    async doubleClick(locator: string): Promise<void> {
        await this.page.locator(locator).dblclick();
    }

    async rightClick(locator: string): Promise<void> {
        await this.page.locator(locator).click({
            button: 'right'
        });
    }

    // Input Actions
    async enterText(locator: string, text: string): Promise<void> {
        await this.page.fill(locator, text);
    }

    async appendText(locator: string, text: string): Promise<void> {
        await this.page.locator(locator).pressSequentially(text);
    }

    async clearText(locator: string): Promise<void> {
        await this.page.locator(locator).clear();
    }

    // Dropdown
    async selectByValue(locator: string, value: string) {
        await this.page.selectOption(locator, value);
    }

    async selectByLabel(locator: string, label: string) {
        await this.page.selectOption(locator, {
            label
        });
    }

    async selectByIndex(locator: string, index: number) {
        await this.page.locator(locator)
            .selectOption({ index });
    }

    // Checkbox
    async check(locator: string) {
        await this.page.locator(locator).check();
    }

    async uncheck(locator: string) {
        await this.page.locator(locator).uncheck();
    }

    // Radio Button
    async selectRadio(locator: string) {
        await this.page.locator(locator).check();
    }

    // Mouse Actions
    async hover(locator: string) {
        await this.page.locator(locator).hover();
    }

    async dragAndDrop(source: string, target: string) {
        await this.page.locator(source)
            .dragTo(this.page.locator(target));
    }

    // Keyboard
    async pressKey(key: string) {
        await this.page.keyboard.press(key);
    }

    // Upload
    async uploadFile(locator: string, filePath: string) {
        await this.page.locator(locator)
            .setInputFiles(filePath);
    }

    // Waits
    async waitForElement(locator: string) {
        await this.page.locator(locator)
            .waitFor({ state: 'visible' });
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async hardWait(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }

    // Scrolling
    async scrollIntoView(locator: string) {
        await this.page.locator(locator)
            .scrollIntoViewIfNeeded();
    }

    async scrollToBottom() {
        await this.page.evaluate(() => {
            window.scrollTo(
                0,
                document.body.scrollHeight
            );
        });
    }

    async scrollToTop() {
        await this.page.evaluate(() => {
            window.scrollTo(0, 0);
        });
    }

    // Get Text
    async getText(locator: string): Promise<string> {
        return await this.page.locator(locator)
            .innerText();
    }

    async getAttribute(
        locator: string,
        attribute: string
    ): Promise<string | null> {

        return await this.page.locator(locator)
            .getAttribute(attribute);
    }

    // Visibility
    async isVisible(locator: string): Promise<boolean> {
        return await this.page.locator(locator)
            .isVisible();
    }

    async isEnabled(locator: string): Promise<boolean> {
        return await this.page.locator(locator)
            .isEnabled();
    }

    async isChecked(locator: string): Promise<boolean> {
        return await this.page.locator(locator)
            .isChecked();
    }

    // Screenshots
    async takeScreenshot(name: string) {
        await this.page.screenshot({
            path: `reports/screenshots/${name}.png`,
            fullPage: true
        });
    }

    // Alerts
    async acceptAlert() {
        this.page.once('dialog', dialog =>
            dialog.accept()
        );
    }

    async dismissAlert() {
        this.page.once('dialog', dialog =>
            dialog.dismiss()
        );
    }

    // Frames
    async switchToFrame(frameName: string) {
        return this.page.frame(frameName);
    }

    // Tabs
    async switchToNewTab() {
        const newPage = await this.page
            .context()
            .waitForEvent('page');

        await newPage.waitForLoadState();

        return newPage;
    }

    // Assertions
    async verifyText(
        locator: string,
        expectedText: string
    ) {
        await expect(
            this.page.locator(locator)
        ).toHaveText(expectedText);
    }

    async verifyContainsText(
        locator: string,
        expectedText: string
    ) {
        await expect(
            this.page.locator(locator)
        ).toContainText(expectedText);
    }

    async verifyVisible(locator: string) {
        await expect(
            this.page.locator(locator)
        ).toBeVisible();
    }

    async verifyUrl(expectedUrl: string) {
        await expect(this.page)
            .toHaveURL(expectedUrl);
    }

    async verifyTitle(expectedTitle: string) {
        await expect(this.page)
            .toHaveTitle(expectedTitle);
    }
}