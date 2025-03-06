import { init } from '@fullstacksjs/eslint-config';

export default init({
  node: true, // فعال‌سازی پیکربندی برای محیط Node.js
  typescript: true, // اگر از TypeScript استفاده می‌کنید
  react: true, // اگر از React استفاده می‌کنید
  prettier: true, // اگر از Prettier استفاده می‌کنید
  rules: {
    // قوانین سفارشی
  },
});
