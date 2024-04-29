import { createPostSchema } from "@lib/common";
import prisma from "../prisma";

export async function createPost(data) {
  const result = createPostSchema.safeParse(data);
  if (!result.success) {
    return res.status(400).json({ error: result.error });
  }
  const post = await prisma.post.create({
    data: result.data,
  });
  return post;
}

export async function getManyPosts(query) {
  const posts = await prisma.post.findMany();
  return posts;
}

export async function getOnePost(id) {
  const post = await prisma.post.findFirst({ where: { id } });
  return post;
}

export async function updatePost(id, data) {
  const result = createPostSchema.safeParse(data);
  if (!result.success) {
    return res.status(400).json({ error: result.error });
  }
  const post = await prisma.post.update({
    where: { id },
    data: result.data,
  });
  return post;
}

export async function deletePost(id) {
  const post = await prisma.post.delete({ where: { id } });
  return post;
}
