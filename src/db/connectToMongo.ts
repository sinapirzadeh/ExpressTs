import mongoose from 'mongoose';

import createLog from '../tools/createLog';

export default function connectToMongo(uri: string) {
  return mongoose
    .connect(uri)
    .then(() => createLog.info('Mongo Connected!'))
    .catch((error: Error) => {
      createLog.error(error.message);
      throw error;
    });
}
