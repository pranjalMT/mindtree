var evt = require("events").EventEmitter;
var evtEmit = new evt();
// evtEmit.addListener("sajan", hanumanthListener);
// evtEmit.on("sajan", hanumanthListener);
evtEmit.once("sajan", hanumanthListener);
var count = 1;
function hanumanthListener(from){
	console.log(count+" sajan event happened"+from);
};

setInterval(function(){
	evtEmit.emit("sajan"," from chennai");
	count++;
},2000)
