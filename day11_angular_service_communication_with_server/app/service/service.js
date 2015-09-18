(function(){
	var myService = function($http){
		this.getHeros = function(){
			// return $http.get("data/data.json");
			return $http.get("http://localhost:9999/");
		}
	}
	angular.module("app").service("myService", myService);
}());
