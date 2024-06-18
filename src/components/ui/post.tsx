"use client";

import { useQuery } from "@tanstack/react-query";
import { queryPost, queryPostComments } from "@/api/queryPost";
import { queryUsers } from "@/api/queryUsers";
import { postSchema } from "@/schema/postSchema";
import { commentArraySchema } from "@/schema/commentSchema";
import { userArraySchema } from "@/schema/userSchema";
import { Comments } from "@/components/ui/comments";

type PostHeaderProps = {
  postId: string;
};

export const Post = ({ postId }: PostHeaderProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: queryPost.queryKey,
    queryFn: () => queryPost.queryFn(postId),
  });
  const {
    data: commentsData,
    error: commentsError,
    isLoading: commentsIsLoading,
  } = useQuery({
    queryKey: queryPostComments.queryKey,
    queryFn: () => queryPostComments.queryFn(postId),
  });
  const {
    data: usersData,
    error: usersError,
    isLoading: usersIsLoading,
  } = useQuery({
    queryKey: queryUsers.queryKey,
    queryFn: queryUsers.queryFn,
  });

  if (isLoading || usersIsLoading || commentsIsLoading)
    return <div className="py-10">Loading...</div>;
  if (error || usersError || commentsError)
    return <div className="py-10">Something went wrong</div>;

  // check if the data is empty object
  if (Object.keys(data).length === 0)
    return <div className="py-10">Post not found</div>;

  const validatedPost = postSchema.safeParse(data);
  const validatedComments = commentArraySchema.safeParse(commentsData);
  const validatedUsers = userArraySchema.safeParse(usersData);
  if (
    !validatedPost.success ||
    !validatedComments.success ||
    !validatedUsers.success
  )
    return (
      <div className="py-10">Something went wrong with the data validation</div>
    );

  const curentUser = validatedUsers.data.find(
    (user) => user.id === validatedPost.data.userId
  );

  return (
    <>
      <section className="py-8 space-y-4 border-b-2 border-b-black">
        <h1 className="border-2 border-black w-fit px-4 py-0.5 font-bold italic rounded-full whitespace-nowrap font-niconne select-none">
          ./Slash Blog
        </h1>
        <div>
          <h2 className="text-pretty font-bold text-2xl sm:text-4xl">
            {validatedPost.data.title}
          </h2>
        </div>
        {curentUser && (
          <div>
            <h4 className="text-gray-600 text-balance">
              {curentUser.name} - {curentUser.address.city}
            </h4>
            <p className="text-gray-600 text-balance">{curentUser.email}</p>
            <p className="text-gray-600 text-balance">{curentUser.phone}</p>
            <p className="text-gray-600 text-balance">{curentUser.website}</p>
          </div>
        )}
      </section>
      <section className="flex flex-col-reverse sm:flex-row py-10 gap-x-4 gap-y-8">
        <Comments comments={validatedComments.data} />
        <div>
          <h3 className="font-bold text-2xl">Content</h3>
          <p className="mt-2.5 text-xl max-w-2xl text-balance">{validatedPost.data.body}</p>
        </div>
      </section>
    </>
  );
};
