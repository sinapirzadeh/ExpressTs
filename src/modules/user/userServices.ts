import user from "./userModel";
import { IUserType } from "./userTypes";

export const getAllData = async () => {
  const data = await user.find({});
  return data;
};

export const createNewUser = async (data: IUserType) => {
  const isCreated = await user.create(data);
  return isCreated;
};
