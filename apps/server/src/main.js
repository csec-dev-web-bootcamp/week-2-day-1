import express from "express";
import postsController from "./posts/posts.controller";
import "dotenv/config";
import { HttpException, httpExceptionHandler } from "./http-exception";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  throw new HttpException({ message: "server error" }, 400);
  return res.json({
    message: "Hello",
  });
});

app.use("/posts", postsController);

app.all("*", (req, res) => {
  return res.status(404).json({ error: "Not Found" });
});

app.use(httpExceptionHandler);

app.listen(8000, () => {
  console.log("App is running at port: 8000");
});
