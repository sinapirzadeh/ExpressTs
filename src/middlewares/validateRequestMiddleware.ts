import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';

export const validateRequestMiddleware =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: 'Validation error',
        data: result.error.format(),
      });
    }

    next();
  };
