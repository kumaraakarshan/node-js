const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        // Read messages from the file
        const messages = readMessagesFromFile();

        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body>');

        res.write('<div>');
        messages.forEach((message) => {
            res.write(`<p>${message}</p>`);
        });
        res.write('</div>');

        res.write("<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>");
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            
            appendMessageToFile(message);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    } else {
        res.statusCode = 404;
        res.write('<html><body><p>Page not found</p></body></html>');
        return res.end();
    }
});

const readMessagesFromFile = () => {
    try {
        const data = fs.readFileSync('messages.txt', 'utf8');
        return data.split('\n').filter((message) => message.trim() !== '');
    } catch (err) {
        return [];
    }
};

const appendMessageToFile = (message) => {
    fs.appendFileSync('messages.txt', message + '\n');
};

server.listen(4000, () => {
    console.log('Server running at port 4000');
});
