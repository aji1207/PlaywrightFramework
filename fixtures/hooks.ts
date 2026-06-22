import { test } from '@playwright/test';
import { Logger } from '../utils/Logger';

test.beforeEach(async ({}, testInfo) => {

    Logger.info(
        `STARTING TEST : ${testInfo.title}`
    );
});

test.afterEach(async ({}, testInfo) => {

    Logger.info(
        `ENDING TEST : ${testInfo.title}`
    );

    Logger.info(
        `STATUS : ${testInfo.status}`
    );
});