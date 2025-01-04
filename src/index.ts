import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import api from "./modules/baseRouters";
import dbConection from "./config/database";
import logger from "./utils/helperFunc/logger";
import ErrorHandelingMidderware from "./middlewares/errorHandelingMid";

dotenv.config();

const app = express();
// <-- midilwares -->
app.use(cors()); // for header's
app.use(express.json()); // for parse to json
// <-- midilwares -->

// Database Connection
dbConection(process.env.DB_ADDRESS as string);

// app router
app.use("/api/", api);

// error handeler
app.use(ErrorHandelingMidderware);

const port = Number(process.env.SERVER_PORT);
app.listen(port, () =>
  logger.info(`server start on : http://localhost:${port}/api/`)
);
