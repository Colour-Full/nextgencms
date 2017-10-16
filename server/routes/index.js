var webpackHotReload = require('webpack-hot-middleware');
var webpackConfig = require('../../webpack.config');
var webpack = require('webpack');

var compiler = webpack(webpackConfig);


exports = module.exports = function (app) {
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
	}));
	app.use(webpackHotReload(compiler, {
		reload: true,
	}));
	app.get('/', function (req, res) {
		function renderFullPage () {
			return `
		<!doctype html>
		<html>
			<head>
				<title>Redux Universal Example</title>
				<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700" rel="stylesheet">
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
			</head>
			<body>
				<div class="container"></div>
				<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
				<script type="text/javascript" src="materialize.min.js"></script>
				<script src="bundle.js"></script>
			</body>
		</html>
		`;
		}

		res.send(renderFullPage());
	});
};
