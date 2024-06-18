import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { queryPosts } from "@/api/queryPosts";
import { queryUsers } from "@/api/queryUsers";
import { Posts } from "@/components/ui/postsGrid";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryPosts.queryKey,
    queryFn: queryPosts.queryFn,
  });
  await queryClient.prefetchQuery({
    queryKey: queryUsers.queryKey,
    queryFn: queryUsers.queryFn,
  });

  return (
    <main className="container">
      <section className="py-8 space-y-4 border-b-2 border-b-black">
        <h1 className="border-2 border-black w-fit px-4 py-0.5 font-bold italic rounded-full whitespace-nowrap font-niconne select-none">
          ./Slash Blog
        </h1>
        <h2 className="text-pretty font-bold text-4xl">
          Inside Desgin: Stories and Ideas
        </h2>
        <p className="text-gray-600 text-balance">
          Subscribe for the latest desgin trends, design software and releases,
          and exclusive insights from the design industry.
        </p>
      </section>
      <section className="py-10">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Posts />
        </HydrationBoundary>
      </section>
    </main>
  );
}
