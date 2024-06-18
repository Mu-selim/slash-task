"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { queryPosts } from "@/api/queryPosts";
import { queryUsers } from "@/api/queryUsers";
import { postArraySchema } from "@/app/schema/postSchema";
import { userArraySchema } from "@/app/schema/userSchema";
import { ArrowUpRight } from "lucide-react";

export const Posts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: queryPosts.queryKey,
    queryFn: queryPosts.queryFn,
  });
  const {
    data: users,
    error: usersError,
    isFetched: usersFetched,
  } = useQuery({
    queryKey: queryUsers.queryKey,
    queryFn: queryUsers.queryFn,
  });

  if (isLoading || !usersFetched) return <div>Loading...</div>;
  if (error || usersError) return <div>Something went wrong</div>;

  const validatedPosts = postArraySchema.safeParse(data);
  const validatedUsers = userArraySchema.safeParse(users);
  if (!validatedPosts.success || !validatedUsers.success)
    return <div>Something went wrong with the data validation</div>;

  const renderUserName = (userId: number) => {
    const user = validatedUsers.data.find((user) => user.id === userId);
    return user ? `${user.name} - ${user.address.city}` : "Unknown User";
  };

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {validatedPosts.data.map((post) => {
        return (
          <div
            key={post.id}
            className="p-4 rounded-md border-2 border-black flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold text-xl">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {renderUserName(post.userId)}
              </p>
              <p className="mt-2.5">
                {post.body.length > 30
                  ? post.body.slice(0, 30) + "..."
                  : post.body}
              </p>
            </div>
            <Link
              href={`/posts/${post.id}`}
              className="block w-fit mt-2.5 text-sky-400"
            >
              Read More <ArrowUpRight className="inline" />
            </Link>
          </div>
        );
      })}
    </ul>
  );
};
