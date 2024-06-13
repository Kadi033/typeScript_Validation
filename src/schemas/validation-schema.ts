import { z } from "zod";

const validationSchema = z.object({
    name: z.string().max(20).min(2),
    email: z.string().email(),
    password: z.string().min(8).max(20)
})

export type Fields = z.infer<typeof validationSchema>;
export default validationSchema