define(function (require) {
	'use strict';

	var ko = require('knockout');
	var mapping = require('knockout.mapping');

	var photoGridViewModel = {
		status: ko.observable(''),
		photos: mapping.fromJS([])
	};

	var handleGraphResponse = function (resp) {
		console.log(resp);
		mapping.fromJS(resp.data, photoGridViewModel.photos);
	};

	var statusChangeCallback = function (response) {
		photoGridViewModel.status(response.status);
		FB.api('/me/photos/uploaded', handleGraphResponse);
	};

	// hacky because I don't want to waste time integrating with Facebook's apis.
	window.checkLoginState = function () {
		window.FB.getLoginStatus(statusChangeCallback);
	};

	//normally I'd return a class, but this needs to be a singleton.
	return photoGridViewModel;
});