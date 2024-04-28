import { PrismaClient } from "@prisma/client";
import express from "express";
const prisma = new PrismaClient();

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Hello",
  });
});

app.listen(8000, () => {
  console.log("App is running at port: 8000");
});
