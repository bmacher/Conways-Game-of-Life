require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
    }
  },
  paths: {
		jquery: '../node_modules/jquery/dist/jquery',
		underscore: '../node_modules/underscore/underscore',
		backbone: '../node_modules/backbone/backbone',
		text: '../node_modules/requirejs-text/text'
	}
});

require(['views/app-view'], AppView => {  
  'use strict';

  // Initialize the application view
  var app = new AppView();
});