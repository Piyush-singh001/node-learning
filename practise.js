const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers, req.method, req.url);

  if (req.url === "/home") {
    res.write("<h1>welocome to home</h1>");
    return res.end();
  } else if (req.url === "/about") {
    res.write("<h1>welocome to about</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>welocome to men</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>welocome to women</h1>");
    return res.end();
  } else if (req.url === "/kides") {
    res.write("<h1>welocome to kides</h1>");
    return res.end();
  }

  res.write(`
      <html>
         <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>learing</title>
</head>
<body>
   <nav>
      <ul>
         <li><a href="/home">Home</a></li>
         <li><a href="/about">about</a></li>
         <li><a href="/men">men</a></li>
         <li><a href="/women">women</a></li>
         <li><a href="/kides">kides</a></li>
      </ul>
   </nav>
</body>
      </html>
      `);
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server is running on port on http://localhost:${PORT}`);
});
