// Create Web Server
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response) {
    var urlParsed = url.parse(request.url, true);

    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        response.setHeader('Cache-control', 'no-cache');
        response.end(urlParsed.query.message);
        return;
    }

    console.log('Unknown URL');

    response.statusCode = 404;
    response.end('Not Found');
});

server.listen(1337, '