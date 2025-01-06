import jsonResponse from "../../utils/helperFunc/jsonResponse";
import { IResReqType } from "../../types/IResReqType";
import baseController from "../baseController";
import { getAllData, createNewUser } from "./userServices";

class userController extends baseController {
  async getUsers({ req, res, next }: IResReqType): Promise<void> {
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

  async createUser({ req, res, next }: IResReqType) {
    try {
      const isCreated = await createNewUser(req.body);
      if (isCreated) {
        return jsonResponse({
          res,
          msg: "User created!",
        });
      }

      return jsonResponse({
        res,
        msg: "User not created!",
      });
    } catch (err: any) {
      next(err);
    }
  }
}

export default new userController();
