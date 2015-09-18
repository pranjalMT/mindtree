var FirstModel = Backbone.Model.extend({
	// a model can be initialized with a default values
	defaults : {
		// can have default properties of your model
		role : "superhero"
	},
	// is called when an instance is created
	initialize : function(){
		console.log("First Model was initialized");
	}
});

var fm = new FirstModel({
	title : "Batman",
	fName : "Bruce",
	lName : "Wayne"
});

fm.set("city","Gothem");

console.error(fm.get("title"));
console.warn(fm.get("fName"));
console.log(fm.get("lName"));
console.log(fm.get("role"));
console.log(fm.get("city"));

console.log(fm.hasChanged("title")) ;// false
fm.set("title","comic hero") ;// now lets change it
console.log(fm.hasChanged("title")); // true
fm.set("city","bhuvaneshwar") ;// change city too
console.log(fm.changed); // keeps track of the recent change returns an object with city : bhuvaneshwar

console.log(fm.previous("city")); // still remembers the old value
console.log(fm.previousAttributes()); // wont display changes done to defaults values
//============================================================================================
console.log(fm.keys()); // will return an array of all property names
console.log(fm.values()); // will return an array of all property values
console.log(fm.pairs()); // will return all property values in an individual array
console.log(fm.invert()); // will replace key with value and value with key 
console.log(fm.pick("fName", "lName")); // if you want to handpick only the properties you want to display as an object
console.log(fm.omit("fName", "lName")); // now you get all properties except fName and lName

/*


defaults : {
		role : "superhero"
},
initialize : function(){
	console.log("First Model was initialized");
}

 
 */