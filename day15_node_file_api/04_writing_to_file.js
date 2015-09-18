var fs = require("fs");

fs.writeFile("./data.txt","welcome to your life, there is no turning back....",function(){
	console.log("file is written");
});
