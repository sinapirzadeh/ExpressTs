import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import rateLimiter from 'middlewares/rateLimiter';

import env from './config/config';
import connectToMongo from './db/connectToMongo';
import ErrorHandelingMid from './middlewares/errorHandelingMid';
import errorHandlingMiddleware from './middlewares/errorHandelingMid';
import api from './modules/apiRouter';

export const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(helmet());
  app.use(errorHandlingMiddleware);
  app.use(rateLimiter);

  app.use('/api/', api);

  connectToMongo(env.dbAddress);

  return app;
};
