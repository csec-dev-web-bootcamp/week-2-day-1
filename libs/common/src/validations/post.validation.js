import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().min(2).max(50),
  content: z.string().optional()
});
