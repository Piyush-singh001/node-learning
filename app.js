const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers, req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>node.js learning</title></head>");
  res.write("<body><h1>ram ram piyush</h1><body>");
  res.write("</html");
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server is running on port on http://localhost:${PORT}`);
});
