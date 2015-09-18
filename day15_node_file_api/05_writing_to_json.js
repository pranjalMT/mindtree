var fs = require("fs");

var data = fs.readFileSync("./data.json");
var pdata = JSON.parse(data);
var heroNames = ["Spiderman", "Rajani", "Superman","Batman","Phantom"];
var hero = {
            "title": heroNames[Math.floor(Math.random()*4)],
            "fName": "rajani",
            "lName": "kanth",
            "phone": Math.ceil(Math.random()*999999999),
            "photo": "images/default.jpg",
            "hdetails": "Hero Details comes here."
       };
pdata.heros.push(hero);

console.log(pdata.heros.length);

fs.writeFile("./data.json",JSON.stringify(pdata));
console.log("file written");
