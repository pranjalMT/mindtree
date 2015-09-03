var Hero = Backbone.Model.extend({
	urlRoot : "/heros"
});

var hero = new Hero();


$(function(){
	$("#createBat").on("click", function(){
		hero.set({
			fName : "Bruce",
			lName : "Wayne",
		})
	});
	//===================================
	$("#addCity").on("click", function(){
		hero.set({
			city : "Gothem"
		})
	});
	//===================================
	$("#saveBatman").on("click", function(){
		hero.save();
	});
	//===================================
	$("#checkIfNew").on("click", function(){
		console.log(hero.isNew());
	});
	//===================================
	$("#deleteBat").on("click", function(){
		hero.destroy();
	});
	//===================================
});
