var HeroModel = Backbone.Model.extend({
	validate : function(attrs, options){
		if(attrs.power < 0){
			return "hero power can not be below 0";
		}
	}
});

var hm = new HeroModel({
	title : "Batman",
	fName : "Bruce",
	lName : "Wayne",
	power : 7
});

console.log(hm.isValid());

/*
hm.set("power",-5);
console.log(hm.isValid()); // if its false backbone will not allow the model to be saved on the property
console.log(hm.validationError);
 */

// validation can be done when you are using set aswell
// if the validation fails the value is not updated to the the property itself
console.log(hm.get("power"));
hm.set({power : -5}, {validate : true});
console.log(hm.get("power"));
