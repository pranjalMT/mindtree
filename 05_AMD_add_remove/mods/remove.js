define(["mods/count"],function(count){
//----------------------------------------
	var removeBoxHandler = function(){
		var elm = document.querySelector("div").lastChild;
		if(elm){
		document.querySelector("div").removeChild(elm);
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
