var User = Backbone.Model.extend({
	increasePower : function(){
		this.set("hPower",this.get("hPower")+1,{validate : true});
		console.log(this.get("hPower"));
		console.log(this.validationError);
	},
	validate : function(attr){
		if(attr.hPower > 10){
			return "hero's power can not increase above 10";
		}
	}
});

var hero = new User({
    hName : "Superman",
    hMovies : 10,
    hPower : 5
});

console.log(hero.get("hPower"));

function changePower(){
    hero.increasePower();
};

$(function(){
    $("#changeIt").on("click",changePower);
});