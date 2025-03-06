import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import config from './config/config';
import logger from './tools/createLog';
import connectToMongo from './db/connectToMongo';
import errorHandlingMiddleware from './middlewares/errorHandlingMiddleware';
import rateLimiter from './middlewares/rateLimiter';
import apiRouter from './modules/apiRouter';

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());
server.use(errorHandlingMiddleware);
server.use(rateLimiter);

server.use('/api/', apiRouter);

void connectToMongo(config.mongoDbUri);

server
  .listen(config.serverPort, () =>
    logger.info(`server start on : http://localhost:${config.serverPort}/`),
  )
  .on('error', (err: Error) =>
    logger.error(`Failed to start server: ${err.message}`),
  );
