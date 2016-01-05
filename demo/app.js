	// add the module with global defaults for froala
	var myApp = angular.module('myApp', ['ngSanitize', 'froala']).
		value('froalaConfig', {
			// inlineMode: false,
			// allowedTags: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "pre", "blockquote", "table", "thead", "tbody", "tfoot", "tr", "th", "td", "span", "b", "u", "i", "strong", "em", "strike", "img", "ul", "ol", "li", "iframe", "object", "a", "main", "section", "article", "nav", "header", "aside", "figure", "figurecaption", "footer", "details", "summary", "mark", "time", "sub", "sup", "dorsata"],
			// allowedAttrs: ["class", "id", "title", "href", "alt", "src", "style", "width", "height", "target", "rel", "name", "value", "type", "colspan", "rowspan", "size", "color", "cellpadding", "cellspacing", "valign", "align", "autocomplete", "background", "bgcolor", "contenteditable", "tabindex", "data-.*", "contenteditable", "tabindex", "item-id"],
			// events : {
			// 	align : function(e, editor, alignment){
			// 		console.log(alignment + ' aligned');
			// 	}
			// },
			// onChild : [
			// {
			// 	event : 'keydown keyup',
			// 	child : 'dorsata-article-reference',
			// 	callback : function(e){
			// 		console.log(e.type, 'from onChild');
			// 	}
			// }]

			toolbarInline: false,
			placeholderText: "Edit Your Content Here!"
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
			placeholderText : 'Add a Title',
			charCounterCount: false,
			toolbarInline: true
		};

		$scope.myTitle = '<h1><span style="font-size: 36px;"><span style="font-family: Verdana,Geneva,sans-serif;">My Document\'s Title</span></span></h1>';
		$scope.myHtml = "";

	});
