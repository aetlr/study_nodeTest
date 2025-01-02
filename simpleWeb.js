const http = require('http');


http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World');
  let param = req.url;
  if (param === '/hi') {
    res.end('hi world');
  }
  else if (param === '/hello') {
    res.end('hello world');
  }
 
}).listen(7777);