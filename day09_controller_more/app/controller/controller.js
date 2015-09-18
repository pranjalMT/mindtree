(function(){
	var myFun = function($scope){
	$scope.heros = [
			{title : 'Batman', 		photo : 'images/batman.jpg',	city:'Gothem',	   popular:9,		releaseDate:'2015-09-08',	ticketPrice:150.45678},
			{title : 'Ironman', 	photo : 'images/ironman.jpg',	city:'New York',   popular:8,		releaseDate:'2015-09-12',	ticketPrice:122.75846},
			{title : 'Spiderman', 	photo : 'images/spiderman.jpg',	city:'New York',   popular:7,		releaseDate:'2015-08-28',	ticketPrice:150.67458},
			{title : 'Phantom', 	photo : 'images/phantom.jpg',	city:'Bangalla',   popular:4,		releaseDate:'2015-09-05',	ticketPrice:75.78456},
			{title : 'Superman', 	photo : 'images/superman.jpg',	city:'Metropolis', popular:6,		releaseDate:'2015-08-04',	ticketPrice:200.45678},
			{title : 'Rajani', 		photo : 'images/rajani.jpg',	city:'Chennai',	   popular:10,		releaseDate:'2015-09-09',	ticketPrice:450.67845}
		];
	$scope.heroSort = "title";
	$scope.reverse = true;
	$scope.herofilter = "";
	
	$scope.sortIt = function(val){
		$scope.heroSort = val; 
		$scope.reverse = !$scope.reverse
	}
	};
	
	angular.module("app").controller("firstController",myFun);
}())
