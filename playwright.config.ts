import { defineConfig } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'
    },


    reporter: [

    ['html', {

        outputFolder:
            `reports/html-report`

    }],

    ['allure-playwright']
],
  
 
});