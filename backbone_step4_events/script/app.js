var User = Backbone.Model.extend({});

var hero = new User({
    hName : "Superman",
    hMovies : 10,
    hPower : 5
});

console.log(hero.get("hPower"));

function changePower(){
    var temp = hero.get("hPower");
    hero.set("hPower",temp+1);
    console.log(hero.get("hPower"));
};

$(function(){
    $("#changeIt").on("click",changePower);
});