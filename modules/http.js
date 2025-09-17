import http from "http";

const app = http.createServer((request, response) => {
  const data = {
    version: "0.1.1",
    name: "E-Commerce API",
    status: "Running",
  };
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(data));
});

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
