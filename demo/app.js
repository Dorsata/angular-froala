	// add the module with global defaults for froala
	// Define popup template.
	$.extend($.FroalaEditor.POPUP_TEMPLATES, {
	  'customPlugin.popup': '[_BUTTONS_][_CUSTOM_LAYER_]'
	});

	// Define popup buttons.
	$.extend($.FroalaEditor.DEFAULTS, {
	  popupButtons: ['popupClose', '|', 'popupButton1', 'popupButton2'],
	});

	// The custom popup is defined inside a plugin (new or existing).
	$.FroalaEditor.PLUGINS.customPlugin = function (editor) {
	  // Create custom popup.
	  function initPopup () {
	    // Load popup template.
	    var template = $.FroalaEditor.POPUP_TEMPLATES.customPopup;
	    if (typeof template == 'function') template = template.apply(editor);

	    // Popup buttons.
	    var popup_buttons = '';

	    // Create the list of buttons.
	    if (editor.opts.popupButtons.length > 1) {
	      popup_buttons += '<div class="fr-buttons">';
	      popup_buttons += editor.button.buildList(editor.opts.popupButtons);
	      popup_buttons += '</div>';
	    }

	    // Load popup template.
	    var template = {
	      buttons: popup_buttons,
	      custom_layer: '<div class="custom-layer">Hello World!</div>'
	    };

	    // Create popup.
	    var $popup = editor.popups.create('customPlugin.popup', template);

	    return $popup;
	  }

	  // Show the popup
	  function showPopup () {
	    // Get the popup object defined above.
	    var $popup = editor.popups.get('customPlugin.popup');

	    // If popup doesn't exist then create it.
	    // To improve performance it is best to create the popup when it is first needed
	    // and not when the editor is initialized.
	    if (!$popup) $popup = initPopup();

	    // Set the editor toolbar as the popup's container.
	    editor.popups.setContainer('customPlugin.popup', editor.$tb);

	    // If the editor is not displayed when a toolbar button is pressed, then set BODY as the popup's container.
	    // editor.popups.setContainer('customPlugin.popup', $('body'));

	    // Trigger refresh for the popup.
	    // editor.popups.refresh('customPlugin.popup');

	    // This custom popup is opened by pressing a button from the editor's toolbar.
	    // Get the button's object in order to place the popup relative to it.
	    var $btn = editor.$tb.find('.fr-command[data-cmd="myButton"]');

	    // Compute the popup's position.
	    var left = $btn.offset().left + $btn.outerWidth() / 2;
	    var top = $btn.offset().top + (editor.opts.toolbarBottom ? 10 : $btn.outerHeight() - 10);

	    // Show the custom popup.
	    // The button's outerHeight is required in case the popup needs to be displayed above it.
	    editor.popups.show('customPlugin.popup', left, top, $btn.outerHeight());
	  }

	  // Hide the custom popup.
	  function hidePopup () {
	    editor.popups.hide('customPlugin.popup');
	  }

	  // Methods visible outside the plugin.
	  return {
	    showPopup: showPopup,
	    hidePopup: hidePopup
	  }
	}

	// Define an icon and command for the button that opens the custom popup.
	$.FroalaEditor.DefineIcon('buttonIcon', { NAME: 'star'})
	$.FroalaEditor.RegisterCommand('myButton', {
	  title: 'Show Popup',
	  icon: 'buttonIcon',
	  undo: false,
	  focus: false,
	  plugin: 'customPlugin',
	  callback: function () {
	    this.customPlugin.showPopup();
	  }
	});

	// Define custom popup close button icon and command.
	$.FroalaEditor.DefineIcon('popupClose', { NAME: 'times' });
	$.FroalaEditor.RegisterCommand('popupClose', {
	  title: 'Close',
	  undo: false,
	  focus: false,
	  callback: function () {
	    this.customPlugin.hidePopup();
	  }
	});

	// Define custom popup 1.
	$.FroalaEditor.DefineIcon('popupButton1', { NAME: 'bell-o' });
	$.FroalaEditor.RegisterCommand('popupButton1', {
	  title: 'Button 1',
	  undo: false,
	  focus: false,
	  callback: function () {
	    alert("popupButton1 was pressed");
	  }
	});

	// Define custom popup 2.
	$.FroalaEditor.DefineIcon('popupButton2', { NAME: 'bullhorn' });
	$.FroalaEditor.RegisterCommand('popupButton2', {
	  title: 'Button 2',
	  undo: false,
	  focus: false,
	  callback: function () {
	    alert("popupButton2");
	  }
	});

	var myApp = angular.module('myApp', ['froala']).
	value('froalaConfig', {
		toolbarInline: false,
		placeholderText: 'Edit Your Content Here!',
	//	toolbarButtons: ['myButton'],
	});

	// create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope) {

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

		$scope.codeOptions = {
			codeBeautifierOptions: {
	      end_with_newline: true,
	      indent_inner_html: true,
	      extra_liners: ['div','p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'ul', 'ol', 'table', 'dl'],
	      brace_style: 'expand',
	      indent_char: '\t',
	      indent_size: 1,
	      wrap_line_length: 0
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
