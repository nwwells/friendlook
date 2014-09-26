define(function (require) {
	'use strict';

	var render = require('lib/render/Render');
	var publish = require('lib/subscribe/Publish');
	var Controller = require('lib/navigation/Controller');

	//this is a test

	// Controllers
	require('feature/photo-grid/PhotoGridController');

	var start = function () {
		publish({channel: 'app:started'});
	};

	return { start: start };
});