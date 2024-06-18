import { z } from "zod";

export const commentSchema = z.object({
  postId: z.number(),
  id: z.number(),
  name: z.string(),
  email: z.string(),
  body: z.string(),
});

export const commentArraySchema = z.array(commentSchema);
