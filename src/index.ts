import { createApp } from './app';
import config from './config/config';
import logger from './utils/helperFunc/logger';

const app = createApp();

app
  .listen(config.serverPort, () =>
    logger.info(`server start on : http://localhost:${config.serverPort}/api/`),
  )
  .on('error', (err: Error) =>
    logger.error(`Failed to start server: ${err.message}`),
  );
