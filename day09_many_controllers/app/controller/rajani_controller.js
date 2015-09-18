(function(){
//-----------------------------------------	
var rajaniController = function($scope){
	$scope.title = "Superstar";
	$scope.photo = "images/rajani.jpg";
	$scope.fName = "Rajani";
	$scope.lName = "kanth";
	$scope.city = "Chennai";
	$scope.phone = 487623951;
}

angular.module("app").controller("rajanicontroller", rajaniController)
//-----------------------------------------	
}())
