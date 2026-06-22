import { Logger } from './utils/Logger';

async function globalTeardown() {

    Logger.info(
        '============== EXECUTION COMPLETED =============='
    );
}

export default globalTeardown;