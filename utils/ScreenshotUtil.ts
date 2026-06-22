import { Page } from '@playwright/test';
import { ReportManager } from './ReportManager';

export class ScreenshotUtil {

    static async capture(
        page: Page,
        name: string
    ) {

        const timestamp =
            new Date()
                .toISOString()
                .replace(/:/g, '-');

        await page.screenshot({

            path:
                `${ReportManager.screenshotFolder}/${name}_${timestamp}.png`,

            fullPage: true
        });
    }
}