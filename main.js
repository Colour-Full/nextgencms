var keystone = require('keystone');

keystone.init({

	'name': 'Next Gen CMS',
	'static': [
		'./server/public/js/',
		'./server/public/scss/js/bin/',
		'./server/public/img/',
		'./server/public/scss/sass/',
	],

	'auto update': true,
	'mongo': 'mongodb://localhost/nextgencms',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '6D61822FBEAED8635A4A52241FEC3',

});

// Load your project's Models
keystone.import('./server/models');

// Load routes
keystone.set('routes', require('./server/routes'));

keystone.start();
