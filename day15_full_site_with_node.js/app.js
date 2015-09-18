var http = require("http");
var fs = require("fs"); 
console.log("starting");
var config = JSON.parse(fs.readFileSync("./config.json"));
var host = config.host;
var port = config.port;
var server = http.createServer(function(request, response){
	console.log("recieve request "+request.url);
	fs.readFile("./"+request.url, function(error, data){
		if(error){
			response.writeHead(404, {"Content-type":"text/plain"});
			response.end("page not found")
		}else{
			response.writeHead(200, {"Content-type":"text/html"});
			response.end(data)
		}
	});
});
server.listen(port,host, function(){
	console.log("server started at  localhost:8088");
});