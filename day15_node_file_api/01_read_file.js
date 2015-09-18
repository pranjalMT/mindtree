var request = require("request");
var webPage = request("http://technicaltrainings.com");
webPage.on("error", function(error){
	console.log(error);
});
webPage.on("data", function(data){
	// console.log(data);
	console.log(data.toString());
});
webPage.on("end", function(){
	console.log("Job done lets go have lunch");
});