var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'New changes testtt uploaded!\n',
        version = 'NodeJS ' + process.versions.node + ' env: '+ process.env.NODE_ENV +' \n',
        host = server.address().address,
        port = server.address().port,
        url = `http://${host}:${port}`,
        response = [message, version, 'Server running at ' + url].join('\n');
    res.end(response);
});

// Écoutez sur un port spécifique, par exemple 3000
server.listen(3000, '127.0.0.1', function() {
    console.log('Server is running at http://127.0.0.1:3000');
});