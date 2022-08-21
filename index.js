const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;

const home = fs.readFileSync('./index.html', 'utf8');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');
const error404 = fs.readFileSync('./404.html');

const server = http.createServer((req, res) => {

  const url = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (url == '/') {
    res.end(home);
  } else if (url == "/about") {
    res.end(about);
  } else if (url == '/contact') {
    res.end(contact);
  } else {
    res.end(error404);
  }


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});