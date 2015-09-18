(function(){
//-----------------------------------------	
var spiderController = function($scope){
	$scope.title = "Spiderman";
	$scope.photo = "images/spiderman.jpg";
	$scope.fName = "Peter";
	$scope.lName = "Parker";
	$scope.city = "New York";
	$scope.phone = 395487621;
}

angular.module("app").controller("spidercontroller", spiderController)
//-----------------------------------------	
}())
