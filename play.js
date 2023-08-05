const http = require('http');


const server = http.createServer((req, res) => {
  
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("my name is Kumar Aakarshan");

});

server.listen(4000);
