import { ReportManager } from './utils/ReportManager';
import { Logger } from './utils/Logger';

async function globalSetup() {

    ReportManager.createFolders();

    Logger.info(
        '============== EXECUTION STARTED =============='
    );
}

export default globalSetup;