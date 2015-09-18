(function(){
	angular.module("app",["ngRoute"]).config(function($routeProvider){
		$routeProvider
		.when("/",{
			controller : "homecontroller",
			templateUrl : "app/view/home.html"
		})
		.when("/batman/:qty?",{
			controller : "batcontroller",
			templateUrl : "app/view/hero.html"
		})
		.when("/ironman",{
			controller : "ironcontroller",
			templateUrl : "app/view/hero.html"
		})
		.when("/spiderman",{
			controller : "spidercontroller",
			templateUrl : "app/view/hero.html"
		})
		.when("/rajani",{
			controller : "rajanicontroller",
			templateUrl : "app/view/hero.html"
		})
	})
}())
