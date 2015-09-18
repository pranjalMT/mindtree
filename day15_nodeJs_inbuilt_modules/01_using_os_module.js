var os = require("os");
console.log(os.totalmem());
console.log("~~~~~~~~~~~~~~~~~~")
console.log(os.freemem());
console.log("~~~~~~~~~~~~~~~~~~")
console.log(os.hostname());
console.log("~~~~~~~~~~~~~~~~~~")
console.log(os.platform());
console.log("~~~~~~~~~~~~~~~~~~")
console.log(os.arch());
console.log("~~~~~~~~~~~~~~~~~~")
console.log(os.release());

setTimeout(function(){
	console.log("whats my name ?");
},5000)
