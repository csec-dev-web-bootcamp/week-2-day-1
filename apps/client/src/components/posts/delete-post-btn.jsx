"use client";

import { deletePost } from "@app/client/data/post.data";
import useMutation from "@app/client/hooks/use-mutation";
import { Button } from "../ui/button";

export default function DeletePostBtn({ postId }) {
  const { startMutation, isMutating } = useMutation();
  function onDelete() {
    startMutation(async () => {
      const result = await deletePost(postId);
    });
  }
  return (
    <Button onClick={onDelete}>{isMutating ? "Deleting..." : "Delete"}</Button>
  );
}
