var fs = require("fs");

fs.readFile("./data/data.json",function(error, data){
	// console.log(error);
	// console.log(data.toString());
	var data = JSON.parse(data);
	var heros = data.heros;
	console.log(heros[0].title);
	// console.log(data.toString());
});

console.log("done reading file");
