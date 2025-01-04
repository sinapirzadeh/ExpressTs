import { NextFunction, Request, Response } from "express";
import validateRequestBody from "./../utils/helperFunc/validateRequestBody";

const modelValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!validateRequestBody(req, res)) return;
  next();
};

export default modelValidation;
