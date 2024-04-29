import PostForm from "@app/client/components/forms/post-form";
import PostsList from "../components/posts/posts-list";

export default function Page() {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <div className="w-full flex gap-4 ">
        <div className="h-fit w-1/3 max-w-md px-4 sticky top-0 py-2">
          <PostForm />
        </div>
        <div className="w-full max-w-xl mx-auto py-2">
          <PostsList />
        </div>
      </div>
    </main>
  );
}
