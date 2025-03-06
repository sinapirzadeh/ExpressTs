import type { IResReqType } from '../../types/ResReqDto';

import jsonResponse from '../../utils/helperFunc/jsonResponse';
import { createNewUser, getAllData } from './userServices';

export async function createUser({ req, res, next }: IResReqType) {
  try {
    const user = await createNewUser(req.body);
    return res.status(201).send(user);
  } catch (err: any) {
    next(err);
  }
}

export async function getUsers({ req, res, next }: IResReqType): Promise<void> {
  try {
    const users = await getAllData();
    return jsonResponse({
      res,
      data: { users },
    });
  } catch (err: any) {
    next(err);
  }
}
