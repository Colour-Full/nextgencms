var webpack = require('webpack');
var path = require('path');

module.exports = {
	// This will be the entry file for all of our React code
	entry: [
		'webpack-hot-middleware/client',
		'./client/index.jsx',
	],
	// This will be where the final bundle file will be outputed
	output: {
		path: path.join(__dirname, '/server/public/js/'),
		filename: 'bundle.js',
		publicPath: '/server/public/img/',
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
						],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
				],
			},
			// {
			// 	test: /\.(woff|woff2)$/,
			// 	use: [
			// 		{
			// 			loader: 'url-loader',
			// 			options: {},
			// 		},
			// 	],
			// },
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
};
