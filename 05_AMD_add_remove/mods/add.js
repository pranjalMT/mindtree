define(["mods/count"], function (count){
	var addFun = function(){
		var elm = document.createElement("div");
		var r = Math.round(Math.random()*255);
		var g = Math.round(Math.random()*255);
		var b = Math.round(Math.random()*255);
		elm.style.lineHeight = "100px";
		elm.style.verticalAlign = "middle";
		elm.style.fontFamily = "arial";
		elm.style.width = "100px";
		elm.style.height = "100px";
		elm.style.float = "left";
		elm.style.margin = "10px";
		elm.style.color = "#333";
		elm.style.fontSize = "40px";
		elm.style.fontWeight = "bold";
		elm.style.textAlign = "center";
		elm.style.backgroundColor = "rgb("+r+","+g+","+b+")";
		elm.innerHTML = ++count.count;
		document.querySelector("div").appendChild(elm);
	}
	return {
		fun : addFun
	}
})



