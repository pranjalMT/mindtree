( function() {
		var hero_controller = function($scope, myFactory) {
			$scope.sortBy = "id";
			$scope.reverse = false;
			$scope.herofilter = "";

			$scope.sortIt = function() {
				$scope.sortBy = arguments[0];
				$scope.reverse = !$scope.reverse;
			};

			$scope.heros = myFactory.getHeros();
		};

		angular.module("app").controller("hero_controller", hero_controller);
	}());
