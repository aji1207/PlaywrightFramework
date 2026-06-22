import fs from 'fs';
import path from 'path';

export class ReportManager {

    private static executionTime =
        new Date()
            .toISOString()
            .replace(/:/g, '-')
            .replace(/\..+/, '');

    static reportFolder =
        path.join(
            process.cwd(),
            'reports',
            this.executionTime
        );

    static screenshotFolder =
        path.join(
            this.reportFolder,
            'screenshots'
        );

    static logFolder =
        path.join(
            this.reportFolder,
            'logs'
        );

    static createFolders() {

        [
            this.reportFolder,
            this.screenshotFolder,
            this.logFolder
        ].forEach(folder => {

            if (!fs.existsSync(folder)) {

                fs.mkdirSync(
                    folder,
                    { recursive: true }
                );
            }
        });
    }
}