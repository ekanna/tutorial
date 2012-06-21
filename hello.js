var http = require('http');
var server = http.createServer(function(req, res){
  res.end('Hello World');
})
server.listne(3333, '127.0.0.1');
console.log('server running at http://127.0.0.1:3333');
console.log('hai');
