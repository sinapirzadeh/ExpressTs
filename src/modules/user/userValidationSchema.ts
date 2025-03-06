import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string().min(3, 'نام کاربری حداقل باید ۳ حرف باشد.'),
  email: z.string().email('ایمیل معتبر نیست.'),
  password: z.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد.'),
});

export default userValidationSchema;
