let http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hello World!');
    response.end();
}).listen(5000);

console.log("Node.js server running on port 5000.");