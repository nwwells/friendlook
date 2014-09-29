define(function (require) {
	'use strict';

	var Controller = require('lib/navigation/Controller');
	var render = require('lib/render/Render');
	var photoGridTemplate = require('text!feature/photo-grid/PhotoGridTemplate.html');
	require('css!feature/photo-grid/PhotoGridStyle.css');
	var photoGridViewModel = require('feature/photo-grid/PhotoGridViewModel');

	return new Controller({
		name: 'PhotoGrid',
		routes: {
			MAIN: ''
		},
		MAIN: function () {
			render({
				model: photoGridViewModel,
				selector: '#main',
				template: photoGridTemplate
			});
		}

	});
});