import type {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';

import serverError from '../errors/serverError';
import createLog from '../tools/createLog';

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
    createLog.error(error);
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export default errorHandlingMiddleware;
