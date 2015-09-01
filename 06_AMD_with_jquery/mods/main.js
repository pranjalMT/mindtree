require.config({
	paths : {
		jquery : [
				"lib/jquery-1.11.3"
				]
	}
});

require(["jquery","mods/add","mods/remove"],function($,add,remove){
	$("#addBtn").on("click", add.fun);
	$("#removeBtn").on("click", remove.fun);
});
