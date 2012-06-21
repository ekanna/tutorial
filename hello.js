var http = require('http');
var server = http.createServer(function(req, res){
  res.end('Hello World');
})
server.listne(3333, '127.0.0.1');
