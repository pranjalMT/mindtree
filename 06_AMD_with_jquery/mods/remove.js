define(["mods/count"],function(count){
//----------------------------------------
	var removeBoxHandler = function(){
		var elm = $("div:first").children().last();
		// console.log(elm.text())
		if(elm.length > 0){
			elm.remove();
		count.count--;
		}else{
			alert("nothing to remove")
		}
	}
//----------------------------------------
	return {
		fun : removeBoxHandler
	}
})
