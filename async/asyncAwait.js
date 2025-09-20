import fs from "fs/promises";

async function getData() {
  try {
    const user = await fs.readFile("user.json", "utf-8");
    console.log(user);
    const posts = await fs.readFile("posts.json", "utf-8");
    console.log(posts);
    const comments = await fs.readFile("comments.json", "utf-8");
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
}

getData();
