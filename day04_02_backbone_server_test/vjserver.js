var express = require("express");
var bodyParser = require("body-parser");
var app = express();
    app.use(express.static(__dirname));
    app.use(bodyParser.json());
//-------------------

var heros = {};
var id = 0;

app.post("/heros", function(req,res){
	var hero = req.body;
	hero.id = ++id;
	heros[hero.id] = hero;
	res.json(hero);
});
app.put("/heros/:id", function(req,res){
	var id = parseInt(req.params.id);
	heros[id] = req.body;
	res.json(heros[id]);
});

app.delete("/heros/:id", function(req,res){
	var id = parseInt(req.params.id);
	delete heros[id];
	res.send(null);
});

app.get("/show", function(req,res){
	res.send(heros);
});

app.get("*", function(req,res){
	res.sendFile(__dirname+"index.html");
});
app.listen(9090);
console.log("server running on 9090");