import PostForm from "@app/client/components/forms/post-form";

export default function Page() {
  return (
    <main className="w-full max-w-xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="">
          <PostForm />
        </div>
        <div className=""></div>
      </div>
      <h1 className="text-4xl">hello</h1>
    </main>
  );
}
