import { z } from 'zod';

export const ProfileValidator = z.object({

    first_name: z.string().min(1, 'Enter First Name').regex(/^[A-Za-z]+$/, {
        message: "First name must contain only letters",
    }),
    last_name: z.string().min(1,  'Enter Second Name').regex(/^[A-Za-z]+$/, {
        message: "Last name must contain only letters",
    }),
    role: z.string(),
    }) 
export type TProfileValidator = z.infer<typeof ProfileValidator>