"use server";

import fetcher from "./fetcher";
import revalidate from "./revalidate";

export async function createPost(data) {
  const res = fetcher(`/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    next: { tags: ["POSTS"], revalidate: 3600 },
  });
  revalidate({ tags: ["POSTS"] });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function getManyPosts(query) {
  const res = await fetcher(`/posts?${query ?? ""}`, {
    method: "GET",
    next: { tags: ["POSTS"], revalidate: 3600 },
  });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function getOnePost(id) {
  const res = await fetcher(`/posts/${id}`, {
    method: "GET",
    next: { tags: [`POSTS:${id}`], revalidate: 3600 },
  });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function updatePost(id, data) {
  const res = await fetcher(`/posts/${id}`, {
    method: "POST",
    body: JSON.stringify(data),
    next: { tags: ["POSTS"], revalidate: 3600 },
  });
  revalidate({ tags: ["POSTS", `POSTS:${id}`] });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function deletePost(id) {
  const res = await fetcher(`/posts/${id}`, {
    method: "DELETE",
    next: { tags: ["POSTS"], revalidate: 3600 },
  });
  revalidate({ tags: ["POSTS"] });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}
