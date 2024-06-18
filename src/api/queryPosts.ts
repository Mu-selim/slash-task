export const queryPosts = {
  queryKey: ["posts"],
  queryFn: async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => data);
  },
};
