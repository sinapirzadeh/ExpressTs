import type { NextFunction, Request, Response } from 'express';

import { createNewUser, getAllData } from './userServices';

export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const users = await getAllData();
    res.send({ users });
  } catch (err: unknown) {
    next(err);
  }
}

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const user = await createNewUser(req.body);
    res.status(201).send(user);
  } catch (err: unknown) {
    next(err);
  }
}
