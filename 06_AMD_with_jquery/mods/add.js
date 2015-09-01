define(["mods/count"], function (count){
	var addFun = function(){
		var elm = $("<div/>");
		var r = Math.round(Math.random()*255);
		var g = Math.round(Math.random()*255);
		var b = Math.round(Math.random()*255);
		elm.css({
			lineHeight : "100px",
			verticalAlign : "middle",
			fontFamily : "arial",
			width : "100px",
			height : "100px",
			float : "left",
			margin : "10px",
			color : "#333",
			fontSize : "40px",
			fontWeight : "bold",
			textAlign : "center",
			backgroundColor : "rgb("+r+","+g+","+b+")"
		})	
		elm.text(++count.count);
		$("div:first").append(elm);
	}
	return {
		fun : addFun
	}
})



