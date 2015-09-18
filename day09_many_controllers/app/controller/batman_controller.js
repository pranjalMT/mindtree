(function(){
//-----------------------------------------	
var batController = function($scope, $routeParams){
	$scope.title = "Batman";
	$scope.photo = "images/batman.jpg";
	$scope.fName = "Bruce";
	$scope.lName = "Wayne";
	$scope.city = "Gothem";
	$scope.phone = 987654321;
	$scope.qty = $routeParams.qty
}

angular.module("app").controller("batcontroller", batController)
//-----------------------------------------	
}())
