"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  body: z
    .string()
    .min(50, "Post body must be at least 50 characters")
    .max(2000, "Post body is too long"),
});

export const CreatePostForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState, reset } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", body: "" },
  });
  const { isSubmitting, errors } = formState;

  const handleFormSubmit = async (data: z.infer<typeof formSchema>) => {
    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Post created successfully", { duration: 4000 });
    reset();
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-y-4">
        <label htmlFor="title">
          <span className="font-bold">Title</span>
          <input
            id="title"
            type="text"
            {...register("title")}
            placeholder="Enter a title for your post"
            className="block w-full max-w-4xl mt-1 px-2 py-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          {errors.title && (
            <p className="text-red-500 mt-0.5">{errors.title.message}</p>
          )}
        </label>
        <label htmlFor="body">
          <span className="font-bold">Body</span>
          <textarea
            id="body"
            {...register("body")}
            placeholder="Enter the body of your post"
            rows={4}
            className="resize-none block w-full max-w-4xl mt-1 px-2 py-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          {errors.body && (
            <p className="text-red-500 mt-0.5">{errors.body.message}</p>
          )}
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 px-4 py-2 bg-black text-white rounded-md font-bold"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
