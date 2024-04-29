import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@app/client/components/ui/card";
import { getManyPosts } from "@app/client/data/post.data";
import { Button } from "../ui/button";
import DeletePostBtn from "./delete-post-btn";
export default async function PostsList() {
  const posts = await getManyPosts();
  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className="space-x-2">
            <Button>edit</Button>
            <DeletePostBtn postId={post.id} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
