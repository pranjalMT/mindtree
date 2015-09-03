var Hero = Backbone.Model.extend({
	defaults : {
		role : "Super Hero",
		runSpeed : 200
	},
	initialize : function(){
		console.log("a Hero instance was created");
	},
	validate : function(args){
		console.log("validation method is executed");
		if(args.power < 0){
			return "hero can not have power less than 0"
		}
	}
});

var hero = new Hero({
	fName : "Bruce",
	lName : "Wayne",
	 city : "Gothem",
	 title: "<h1> Batman </h1>"
});

console.log(hero.get("fName"));
console.log(hero.get("lName"));
console.log(hero.get("role"));
console.log("========================");
// hero.set("role","Comic Hero");
hero.set({
	role : "Comic Hero",
	city : "Bhuvaneshwar",
	power : 7
});
console.log(hero.get("role"));
console.log(hero.get("city"));
console.log(hero.has("age")); // will return TRUE or FALSE
console.log("========================");
console.log(hero.get("power"));
console.log(hero.has("power")); // will return TRUE or FALSE
// hero.unset("power");
hero.unset("city");
console.log("========================");
console.log(hero.has("power")); // will return TRUE or FALSE
console.log(hero.has("city")); // will return TRUE or FALSE
console.log(hero.toJSON());
// hero.clear(); // will remove all the attributes
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log(hero.toJSON());
console.log(hero.has("fName")); // will return TRUE or FALSE
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log(hero.changed); // false
hero.set("fName","Joker");
// console.log(hero.changed); // true
console.log(hero.hasChanged("fName"));
console.log(hero.hasChanged("lName"));

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(hero.get("power"));
hero.set({
	power : -2
},{
	validate : true
});
console.log("++++++++++++++++++++++++++++++++++++++++++++");
console.log(hero.get("power"));
console.log(hero.validationError);
// console.log(hero.isValid());
// console.log(hero.attributes);
console.log("++++++++++++++++++++++++++++++++++++++++++++");
console.log(hero.changedAttributes()); // copy of changed
console.log(hero.changed);
console.log(hero.previous("fName"));
console.log(hero.previousAttributes());
$(function(){
	$("body").append(hero.escape("title"));
});
