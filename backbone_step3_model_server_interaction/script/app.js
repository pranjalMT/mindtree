var Hero = Backbone.Model.extend({
	urlRoot : "/heros",
	idAttribute : "vjId"
});

var hero = new Hero();

// Create	POST	/heros
// Read		GET		/heros/:id
// Update	PUT		/heros/:id
// Delete	DELETE	/heros/:id


$(function(){
	$("#cb").on("click",function(){
		hero.set({
			fname : "Bruce",
			lname : "Wayne"
		});
		// uses jquery's post 
	});
	$("#sv").on("click",function(){
		hero.save();
	});
	$("#chk").on("click",function(){
		console.log(hero.isNew());
	});
	$("#uc").on("click",function(){
		hero.set({
			city : "Gothem"
		});
	});
	$("#del").on("click",function(){
		hero.destroy();
	});
});
