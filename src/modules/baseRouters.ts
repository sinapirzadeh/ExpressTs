import { Router } from "express";
import userRouter from "./user/userRouter";

const app = Router();

app.use("/users", userRouter);

export default app;
