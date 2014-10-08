	// add the module with global defaults for froala
	var myApp = angular.module('myApp', ['ngSanitize', 'froala']).
		value('froalaConfig', {
			inlineMode: false
		});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
		$scope.options = {
			placeholder : 'My Placeholder',
			onKeydown : function(e){
				$scope.keyCode = e.keyCode;
			},
			onCtrlEnter : function(){
				alert('Save it!');
			}
		};

		$scope.froalaAction = function(action){
			$scope.options.froala(action);
		};

	});
