var express = require("express");
var app = express();
	app.set("view engine", "ejs");
	
var data = ["batman","ironman","superman","spiderman", "contact"];

app.get("/", function(request, response){
	response.render("home",{
		compName : "Mindtree",
		prodList : data
	});
});

var server = app.listen(6060, function(){
	console.log("server is now running on port 6060");
});