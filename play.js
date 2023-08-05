const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title> my first page</title></head>');
   res.write("<header> <a href='/home' >Home</a>  <a href='/about' >about </a> <a href='/node' > node</a></header>")
   
   res.write('<body>');
  

   if (url === '/home') {
    res.write('<p>Welcome to home</p>');
  } else if (url === '/about') {
    res.write('<p>Welcome to About Us page</p>');
  } else if (url === '/node') {
    res.write('<p>Welcome to my Node.js project</p>');
  } else {
    res.statusCode = 404;
    res.write('<p>Page not found</p>');
  }

  
  res.write('</body>');
  res.write('</html>');
   
});

server.listen(4000, () =>{
    console.log('kumar aakarshan')
})
