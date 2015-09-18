var http = require("http");
console.log("starting");

var host = "localhost";
var port = 1111;

var server = http.createServer(function(request, response){
	// response.writeHead(200,{"Content-Type" : "text/plain"});
	response.writeHead(200,{"Content-Type" : "text/html"});
	response.write("<html><head><title>Welcome to Mindtree</title></head><body><ul><li><a href='http://google.com'>Lets go to google</a></li></ul></body></html>");
	response.end();
});

server.listen(port, host, function(){
	console.log("the server is now running on localhost:1111");
});