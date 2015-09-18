var User = Backbone.Model.extend({});
var hero = new User({
    hName : "Superman",
        hMovies : 10,
        hPower : 5
   });

hero.on("change", function(){
	console.log("something changed");
});
   
hero.on("change:hPower", function(evt){
	console.log("hero's power changed");
   
// console.log(hero.get("hPower"));
// console.log(evt.changed.hPower);
// console.log(evt.get('hPower'));
});
   
$(function(){
	$("#power").on("click",function(){
   				hero.set("hPower",Math.round(Math.random()*10));
				});
	$("#movie").on("click",function(){
				hero.set("hMovies",11);
			});
});