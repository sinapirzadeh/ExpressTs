import createLog from 'winston';

export default createLog.createLogger({
  level: 'info',
  format: createLog.format.combine(
    createLog.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    createLog.format.printf(
      (info) =>
        `${info.timestamp as string} ${info.level} : ${info.message as string}`,
    ),
  ),
  transports: [
    new createLog.transports.Console({
      format: createLog.format.combine(
        createLog.format.colorize(),
        createLog.format.simple(),
        createLog.format.printf(
          (info) => `${info.level} : ${info.message as string}`,
        ),
      ),
    }),
    new createLog.transports.File({
      filename: './logs/error.log',
      level: 'error',
      maxsize: 524880,
      maxFiles: 4,
    }),
    new createLog.transports.File({
      filename: './logs/info.log',
      level: 'info',
      maxsize: 524880,
      maxFiles: 4,
    }),
    new createLog.transports.File({
      filename: './logs/warn.log',
      level: 'warn',
      maxsize: 524880,
      maxFiles: 4,
    }),
  ],
});
