var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname));

app.get("*",function(req,res){
	res.sendFile(__dirname+"/03_route_wild_card.html");
});

app.listen(3000);
console.log("server started at 3000");