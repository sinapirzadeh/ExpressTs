const config = {
  mongoDbUri: (process.env.DB_ADDRESS as string) || '',
  serverPort: Number(process.env.SERVER_PORT) || 3000,
  jwt:
    (process.env.JWT_KEY as string) ||
    'don`t use this: create a string in .env file  like this : JWT_KEY=vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS',
};

export default config;
