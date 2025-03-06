import type { Response } from 'express';

export interface ResponseDto {
  res: Response;
  msg?: string;
  code?: number;
  data?: object;
}
