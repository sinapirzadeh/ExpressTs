import dotenv from 'dotenv';

dotenv.config();

const config = {
  mongoDbUri: process.env.DB_ADDRESS || '',
  serverPort: Number(process.env.SERVER_PORT) || 8000,
  jwt: process.env.JWT_KEY || '',
};

export default config;
