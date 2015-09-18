var evt = require("events").EventEmitter;

var ee  = new evt();
var si = null;
var count = 1;

ee.on("mindtree",callBack);

function callBack(){
	console.log("mindtree event happened");
}

si = setInterval(function(){
	ee.emit("mindtree");
	count+=1;
	if(count > 5){
		clearInterval(si);
		ee.removeListener("mindtree",callBack);
		ee.emit("mindtree");
	}
},2000);