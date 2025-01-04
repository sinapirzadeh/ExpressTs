import mongoose from "mongoose";
import logger from "../utils/helperFunc/logger";

const connectToDatabase = async (dbAddres: string): Promise<void> => {
  await mongoose
    .connect(dbAddres)
    .then(() => logger.info("Connected to MongoDB"))
    .catch((error: any) => logger.error(error.message));
};

export default connectToDatabase;
