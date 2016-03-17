	// add the module with global defaults for froala
	var myApp = angular.module('myApp', ['froala']).
	value('froalaConfig', {
		toolbarInline: false,
		placeholderText: 'Edit Your Content Here!'
	});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {

		// $scope.options = {
		// 	placeholder : 'My Placeholder',
		// 	onCtrlEnter : function(e){
		// 		alert('Save it!');
		// 	},
		// 	onDelete : function(e){
		// 		console.log('deleted');
		// 	},
		// 	events : {
		// 		keydown : function(e){
		// 			$scope.keyCode = e.keyCode;
		// 			console.log('keydown', e.keyCode);
		// 		}
		// 	}
		// };

		// $scope.myHtml = '<p class="">Bacon ipsum dolor sit amet ball tip filet mignon frankfurter beef ribs tri-tip pork chop<dorsata-article-reference item-id="895" contenteditable="false"><span class="dorsata-article-reference-content" contenteditable="true" data-fr-verified="true">A Loop Region in the N-Terminal Domain of Ebola Virus VP40 Is Important in Viral Assembly, Budding, and Egress.</span></dorsata-article-reference> tail venison andouille pig spare ribs shankle. Kielbasa bacon sausage turducken pork loin. Sirloin hamburger prosciutto tongue turducken, chicken meatloaf ground round. Salami short loin pancetta&nbsp;tenderloin kevin rump.&nbsp;</p>';

		// $scope.froalaAction = function(action){
		// 	$scope.options.froala(action);
		// }

		$scope.titleOptions = {
			placeholderText: 'Add a Title',
			charCounterCount: false,
			toolbarInline: true,
			events: {
				'froalaEditor.initialized': function() {
					console.log('initialized');
				}
			}
		};

		$scope.initialize = function(initControls) {
			$scope.initControls = initControls;
			$scope.deleteAll = function() {
				initControls.getEditor()('html.set', '');
			};
		};

		$scope.myTitle = '<span style="font-family: Verdana,Geneva,sans-serif; font-size: 30px;">My Document\'s Title</span><span style="font-size: 18px;"></span></span>';
		$scope.sample2Text = '';
		$scope.sample3Text = '';

	});
