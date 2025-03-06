import mongoose from 'mongoose';

import logger from '../utils/helperFunc/logger';

const connectToMongo = async (uri: string): Promise<void> => {
  await mongoose
    .connect(uri)
    .then(() => logger.info('Connected to MongoDB :) => be Happy!'))
    .catch((error: any) => {
      logger.error(error.message);
      throw error;
    });
};

export default connectToMongo;
