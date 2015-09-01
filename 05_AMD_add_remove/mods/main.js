require(["mods/add","mods/remove"],function(add,remove){
	document.querySelector("#addBtn")
	.addEventListener("click", add.fun);
	document.querySelector("#removeBtn")
	.addEventListener("click", remove.fun);
});
