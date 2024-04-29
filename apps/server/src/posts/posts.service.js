import prisma from "../helpers/prisma-client";

export async function createPost(data) {
  const post = await prisma.post.create({
    data: data,
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
  const post = await prisma.post.update({
    where: { id },
    data: data,
  });
  return post;
}

export async function deletePost(id) {
  const post = await prisma.post.delete({ where: { id } });
  return post;
}
