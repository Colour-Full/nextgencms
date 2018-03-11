var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	// This will be the entry file for all of our React code
	entry: [
		'webpack-hot-middleware/client',
		'./client/index.jsx',
	],
	// This will be where the final bundle file will be outputed
	output: {
		path: path.join(__dirname, '/server/public/'),
		filename: 'bundle.js',
		publicPath: 'server/public/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'react',
							'env',
							'stage-2',
						],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader?-url',
					'sass-loader',
				],
			},
			// {
			// 	test: /\.scss$/,
			// 	use: ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
			// 		use: ['css-loader?-url', 'sass-loader'],
			// 	}),
			// },
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// new ExtractTextPlugin('css/styles.css'),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
};
