export const queryUsers = {
  queryKey: ["users"],
  queryFn: async () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => data);
  },
};
