( function() {
		var hero_controller = function($scope, myService) {
			$scope.sortBy = "id";
			$scope.reverse = false;
			$scope.herofilter = "";

			$scope.sortIt = function() {
				$scope.sortBy = arguments[0];
				$scope.reverse = !$scope.reverse;
			};
			
			myService.getHeros().success(function(r,s,x){
				$scope.heros = r.heros;
			});
			
			
		};

		angular.module("app").controller("hero_controller", hero_controller);
	}());
