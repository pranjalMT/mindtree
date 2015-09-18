var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
var id = 0;
var heros = {};
app.get("/heros", function(req, res) {
	res.json(Object.keys(heros).map(function(id) {
		return heros[id];
	}));
});
app.post("/heros", function(req, res) {
	var hero = req.body;
	hero.id = ++id;
	heros[hero.id] = hero;
	res.json(hero);
});
app.put("/heros/:id", function(req, res) {
	var id = parseInt(req.params.id);
	heros[id] = req.body;
	res.json(heros[id]);
});
app.delete("/heros/:id", function(req, res) {
	var id = parseInt(req.params.id);
	delete heros[id];
	res.json(null);
});
app.get("/show", function(req, res) {
	res.json(heros);
});
app.get("*", function(req, res) {
	res.sendFile(__dirname + "/03_collections_sync.html");
});
app.listen(3000);
console.log("server started at 3000");
