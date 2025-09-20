import http from "http";

const app = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);

  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Welcome to the E-Commerce API</h1>");
  } else if (request.url === "/about") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>About the E-Commerce API</h1>");
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1>404 Not Found</h1>");
    return;
  }

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
