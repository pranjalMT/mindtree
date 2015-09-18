(function(){
	var movie_controller = function($scope, $routeParams, myFactory){
		$scope.sl = $routeParams.id;
		$scope.movies = null;
		$scope.title = "Movies List";
		//--------------------------------------
		
		//--------------------------------------
		$scope.heros = myFactory.getHeros();
			
			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			function init(){
				for(var i = 0; i < $scope.heros.length; i++){
					if($scope.heros[i].id === parseInt($scope.sl)){
						$scope.movies = $scope.heros[i].movieslist;
					}
				}
			}
			init();
			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			
		};
		//-------------------------------------------------------
		//-------------------------------------------------------
	angular.module("app").controller("movie_controller",movie_controller);
	}
());
