import fs from "fs/promises";

fs.readFile("data.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error reading file:", error);
  });

fs.readFile("user.json", "utf-8")
  .then((users) => {
    console.log(users);

    return fs.readFile("posts.json", "utf-8");
  })
  .then((posts) => {
    console.log(posts);

    return fs.readFile("comments.json", "utf-8");
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => console.log(error));
