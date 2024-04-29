import express from "express";
import {
  createPost,
  deletePost,
  getManyPosts,
  getOnePost,
  updatePost,
} from "./posts.service";
import { createPostPipe, updatePostPipe } from "./post.pipe";

const postsController = express.Router();

postsController.get("/", async (req, res) => {
  const posts = await getManyPosts();
  return res.json(posts);
});

postsController.post("/", createPostPipe, async (req, res) => {
  const data = req.body;
  const post = await createPost(data);
  return res.json(post);
});

postsController.get("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await getOnePost(+id);
  return res.json(post);
});

postsController.put("/:id", updatePostPipe, async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const post = await updatePost(+id, data);
  return res.json(post);
});

postsController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await deletePost(+id);
  return res.json(post);
});

export default postsController;
