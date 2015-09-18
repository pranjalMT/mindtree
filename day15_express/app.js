var express = require("express");
var app = express();



app.get("/", function(request, response){
	response.send("<h1> welcome to mindtree  </h1>");
});
app.get("/product", function(request, response){
	response.send("<h1> this is my product page </h1>");
});
app.get("/product/:type", function(request, response){
	var type = request.params.type;
	response.send("<h1> this is my product "+type+" page </h1>");
});
app.get("/google", function(request, response){
	response.send("<h1> this is my google page </h1>");
});
app.get("*", function(request, response){
	response.send("<h1> your page was not found </h1>");
});

var server = app.listen(5050, function(){
	console.log("server is now running on port 5050");
});