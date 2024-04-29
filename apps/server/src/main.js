import express from "express";
import postsController from "./posts/posts.controller";
import 'dotenv/config'

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  try {
    const data = req.body;
    console.log({ data });
    return res.json({
      message: "Hello",
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

app.use("/posts", postsController);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.send({ error: err.message });
});

app.listen(8000, () => {
  console.log("App is running at port: 8000");
});
