export const queryPost = {
  queryKey: ["posts"],
  queryFn: async (postId: string) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => data);
  },
};

export const queryPostComments = {
  queryKey: ["postComments"],
  queryFn: async (postId: string) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )
      .then((res) => res.json())
      .then((data) => data);
  },
};
