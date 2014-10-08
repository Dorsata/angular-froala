	// add the module with global defaults for froala
	var myApp = angular.module('myApp', ['ngSanitize', 'froala']).
		value('froalaConfig', {
			inlineMode: false
		});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {
		$scope.options = {
			placeholder : 'My Placeholder',
			onKeyup : function(e){
				$scope.keyCode = e.keyCode;
				if(
				(e.which === 13 && e.ctrlKey && !e.shiftKey) ||
				(e.which === 13 && e.metaKey && !e.shiftKey)
				) {
					alert('Ctrl + Enter Pressed!');
				}
			}
		};

		$scope.froalaAction = function(action){
			$scope.options.froala(action);
		};

	});
