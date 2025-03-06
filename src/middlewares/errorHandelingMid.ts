import type {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';

import serverError from '../errors/serverError';
import logger from '../utils/helperFunc/logger';

const errorHandlingMiddleware = (
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof serverError) {
    res.status(error.status).json({
      message: error.message,
    });
  } else {
    logger.error(error);
    res.status(500).json({
      messge: 'Internal Server Error',
    });
  }
};

export default errorHandlingMiddleware;
