(function(){
//-----------------------------------------	
var ironController = function($scope){
	$scope.title = "Ironman";
	$scope.photo = "images/ironman.jpg";
	$scope.fName = "Tony";
	$scope.lName = "Stark";
	$scope.city = "New York";
	$scope.phone = 543987621;
}

angular.module("app").controller("ironcontroller", ironController)
//-----------------------------------------	
}())
