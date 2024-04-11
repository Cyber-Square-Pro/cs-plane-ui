import { z } from 'zod';

export const SignUpValidator = z.object({
  email: z.string().min(1, 'Enter email').regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message:'Invalid email format'
  }),
  password: z.string().min(8, {
    message: 'Password should be minimum 8 characters long.'
  }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});;
 
export type TSignUpValidator = z.infer<typeof SignUpValidator>;
