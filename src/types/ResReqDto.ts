import type { NextFunction, Request, Response } from 'express';

export interface ResReqDto {
  req: Request;
  res: Response;
  next: NextFunction;
}
