var express = require("express");
var app = express();
    app.use(express.static(__dirname));
//-------------------

app.get("*", function(req,res){
	res.sendFile(__dirname+"/01_routes_intro.html");
});

app.listen(9090);
console.log("server running on 9090");