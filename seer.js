const http = require("http");
const hostname = "0.0.0.0";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");
  res.end("zeet node");
});
server.listen(port, hostname, () => {
  console.log(`server runing at http://${hostname}:${port}/`);
});
