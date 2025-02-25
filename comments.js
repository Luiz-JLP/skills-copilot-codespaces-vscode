// Create Web Server
// Create a web server that listens on port 3000 and serves comments.json.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const file = path.resolve(__dirname, 'comments.json');

    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});