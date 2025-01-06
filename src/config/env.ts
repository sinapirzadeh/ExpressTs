import dotenv from "dotenv";
dotenv.config();

const env = {
  dbAddress: (process.env.DB_ADDRESS as string) || "",
  serverPort: Number(process.env.SERVER_PORT) || 3000,
  jwt:
    (process.env.JWT_KEY as string) ||
    "dont use this: create a string in .env file  like this : JWT_KEY=vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS",
};

export default env;
