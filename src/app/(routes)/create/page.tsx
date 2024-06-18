import { CreatePostForm } from "@/components/ui/createPostForm";

export default function CreatePost() {
  return (
    <main className="container">
      <section className="py-8 space-y-4 border-b-2 border-b-black">
        <h1 className="border-2 border-black w-fit px-4 py-0.5 font-bold italic rounded-full whitespace-nowrap font-niconne select-none">
          ./Slash Blog
        </h1>
        <h2 className="text-pretty font-bold text-2xl sm:text-4xl">
          Create a new post
        </h2>
        <p className="text-gray-600 text-balance">
          Here you can create a new post and share it with the world.
        </p>
      </section>
      <section className="py-10">
        <CreatePostForm />
      </section>
    </main>
  );
}
