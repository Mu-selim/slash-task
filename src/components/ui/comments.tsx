import { z } from "zod";
import { commentArraySchema } from "@/schema/commentSchema";

type CommentsProps = {
  comments: z.infer<typeof commentArraySchema>;
};

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <aside className="pt-8 border-t-2 sm:pt-0 sm:border-t-0 sm:border-e sm:pe-4 border-black">
      <h4 className="font-bold text-2xl w-fit border-b-2 border-b-black">
        Comments
      </h4>
      <ul className="max-w-sm my-4 space-y-4">
        {comments.map((comment) => (
          <li key={comment.id}>
            <h5 className="font-bold sm:text-lg">{comment.email}</h5>
            <p className="text-gray-600 text-balance">{comment.body}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};
