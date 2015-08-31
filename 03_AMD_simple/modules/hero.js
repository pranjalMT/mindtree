// require("id",[],function(){});
require(["modules/swim", "modules/fly", "modules/walk", "modules/run"], function(s,f,w,r){
	console.log(s)
	console.log(f)
	console.log(w())
	console.log(r(w()))
});
