import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { queryPost, queryPostComments } from "@/api/queryPost";
import { queryUsers } from "@/api/queryUsers";

import { Post } from "@/components/ui/post";

type PostPageProps = {
  params: { postId: string };
};

export default async function PostPage({ params }: PostPageProps) {
  const { postId } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryPost.queryKey,
    queryFn: () => queryPost.queryFn(postId),
  });
  await queryClient.prefetchQuery({
    queryKey: queryPostComments.queryKey,
    queryFn: () => queryPostComments.queryFn(postId),
  });
  await queryClient.prefetchQuery({
    queryKey: queryUsers.queryKey,
    queryFn: queryUsers.queryFn,
  });

  return (
    <main className="container">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Post postId={postId} />
      </HydrationBoundary>
    </main>
  );
}
