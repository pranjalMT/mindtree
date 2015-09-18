(function(){
	angular.module("appRoute",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
		.when("/", {
			controller : "hero_controller",
			templateUrl : "app/views/heros.html"
		})
		.when("/movies/:id", {
			controller : "movie_controller",
			templateUrl : "app/views/movies.html"
		})
		.otherwise({
			redirectTo : "/"
		})
	})
}());
