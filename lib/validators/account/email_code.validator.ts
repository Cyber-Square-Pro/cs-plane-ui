import { z } from 'zod';

export const EmailCodeValidator = z.object({

    code: z.string().min(1),
     
    }) 
export type TEmailCodeValidator = z.infer<typeof EmailCodeValidator>