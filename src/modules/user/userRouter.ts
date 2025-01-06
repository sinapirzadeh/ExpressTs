import { Router } from "express";
import modelValidation from "middlewares/modelValidationMid";
import userController from "./userController";
import userValidation from "./userValidation";

const app = Router();

app.get("/", userController.getUsers);

app.post(
  "/create",
  modelValidation,
  userValidation(),
  userController.createUser
);

export default app;
