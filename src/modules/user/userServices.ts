import type { IUserType } from './userTypes';

import user from './userModel';

export const getAllData = async () => {
  const data = await user.find({});
  return data;
};

export const createNewUser = async (data: IUserType) => {
  await user.create(data);
};
