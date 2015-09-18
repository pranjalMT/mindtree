(function(){
	var movie_controller = function($scope, $routeParams, myService){
		$scope.sl = $routeParams.id;
		$scope.movies = null;
		$scope.title = "Movies List";
		//--------------------------------------
		
		//--------------------------------------
		myService.getHeros().success(function(r,s,x){
				$scope.heros = r.heros;
				init();
			});
			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			function init(){
				for(var i = 0; i < $scope.heros.length; i++){
					if($scope.heros[i].id === parseInt($scope.sl)){
						$scope.movies = $scope.heros[i].movieslist;
					}
				}
			}
			//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			
		};
		//-------------------------------------------------------
		//-------------------------------------------------------
	angular.module("app").controller("movie_controller",movie_controller);
	}
());
