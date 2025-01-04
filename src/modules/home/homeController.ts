import jsonResponse from "../../utils/helperFunc/jsonResponse";
import { IResReqType } from "../../types/IResReqType";
import BaseController from "../baseController";
import { getAllData } from "./homeServices";

class HomeController extends BaseController {
  async getHome({ req, res, next }: IResReqType): Promise<void> {
    try {
      const products = await getAllData();
      return jsonResponse({
        res,
        data: { products },
      });
    } catch (err: any) {
      next(err);
    }
  }
}

export default new HomeController();
