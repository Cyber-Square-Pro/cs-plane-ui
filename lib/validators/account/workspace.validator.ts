import { z } from 'zod';

export const WorkspaceValidator = z.object({
    name: z.string().min(1, "Workspace Name is Required"),
    slug: z.string(),
    organization_size: z.string().min(1, "Select Organization Size"),
    });
 
export type TWorkspaceValidator = z.infer<typeof WorkspaceValidator>