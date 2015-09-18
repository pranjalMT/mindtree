var fs = require("fs");

fs.mkdir("./mindtree", function(){
	console.log("created");
});

/*
fs.mkdir("./mindtree", function(){
	console.log("created");
});
fs.rmdir("./mindtree", function(){
	console.log("deleted");
});
*/

fs.exists("./mindtree", function(){
	// console.log("folder exist");
	fs.rename("./mindtree","./blrMindtree",function(){
		console.log("rename is done")
	})
})
