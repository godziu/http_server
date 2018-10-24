var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader( "Content-Type", "text/html; charset=utf-8" );
    if(request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.write(data);
            response.end();
        });

    } else {
        response.statusCode = 404;
        response.write('<img style="width: 1264px; height: 100%;" src="https://i.stack.imgur.com/WOlr3.png"></img>');
        response.end();
    }
});
server.listen(9000);