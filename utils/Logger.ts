import winston from 'winston';
import { ReportManager } from './ReportManager';

ReportManager.createFolders();

export const Logger =
    winston.createLogger({

        level: 'info',

        format: winston.format.combine(

            winston.format.timestamp({

                format:
                    'YYYY-MM-DD HH:mm:ss'
            }),

            winston.format.printf(

                ({ timestamp, level, message }) =>

                    `[${timestamp}] [${level.toUpperCase()}] ${message}`
            )
        ),

        transports: [

            new winston.transports.Console(),

            new winston.transports.File({

                filename:
                    `${ReportManager.logFolder}/execution.log`
            })
        ]
    });