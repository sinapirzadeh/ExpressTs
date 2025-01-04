import { Router } from "express";
import homeRouter from "./home/homeRouter";

const app = Router();

app.use("/", homeRouter);

export default app;
