import { Router } from "express";
import homeController from "./homeController";

const app = Router();

app.get("/", homeController.getHome);

export default app;
