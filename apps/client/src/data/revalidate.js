"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export default async function revalidate({ tags, paths }) {
  try {
    const revalidatedTags = [];
    const revalidatedPaths = [];
    paths?.forEach((item) => {
      revalidatePath(item);
      revalidatedPaths.push(item);
    });
    tags?.forEach((item) => {
      revalidateTag(item);
      revalidatedTags.push(item);
    });
    return { revalidatedTags, revalidatedPaths, now: Date.now() };
  } catch (error) {
    return error;
  }
}
