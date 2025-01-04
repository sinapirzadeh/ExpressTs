import { NextFunction, Request, Response } from "express";

export interface IResReqType {
  req: Request;
  res: Response;
  next: NextFunction
}
