// console.log(__dirname);
// console.log("++++++++++++++++++++++")
// console.log(__filename);
// console.log(process.argv);
// console.log(process.argv[2]);

function callMe(){
	console.log(" hello there ");
};
process.nextTick(callMe);

console.log("hello from line 12");
console.log("hello from line 13");

