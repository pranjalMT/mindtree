var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

var vjId = 0;
var heros = {};

app.post("/heros",function(req,res){		
	var hero = req.body; 
	hero.vjId = ++vjId;
	heros[hero.vjId] = hero;
	res.json(hero);
});		
									
app.put("/heros/:id",function(req,res){		
	var id = parseInt(req.params.id);
	heros[vjId] = req.body;
	res.json(heros[vjId]);
});											

app.delete("/heros/:id", function(req,res){
	var id = parseInt(req.params.id);
	delete heros[vjId];
	res.json(null);
});

app.get("/show",function(req,res){
	res.json(heros);
});
app.get("*",function(req,res){
	res.sendFile(__dirname+"index.html");
});

app.listen(3000);
console.log("server started at 3000");