import type { UserDto } from './userDto';

import user from './userModel';

export const getAllData = async (): Promise<UserDto[]> => {
  try {
    const data = await user.find({});
    return data;
  } catch {
    throw new Error('Failed to fetch users');
  }
};

export const createNewUser = async (data: UserDto): Promise<UserDto> => {
  try {
    const newUser = await user.create(data);
    return newUser;
  } catch {
    throw new Error('Failed to create user');
  }
};
