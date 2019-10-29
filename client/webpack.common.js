const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: 		__dirname,

	entry:      	[
		'core-js/modules/es6.promise',
		'core-js/modules/es6.array.iterator',
		'index.jsx'
	],

	output:	{
		filename:	'client.js',
		path:        __dirname + '/../dist/public'
	},

	plugins: 		[
		new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery' })
	],

	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		modules: 	['./', 'node_modules']
	},

	module: {
		rules:	[
			{ enforce: 'pre', test: /\.jsx$/, loader: 'source-map-loader'},
			{ enforce: 'pre', test: /\.js?$/, loader: 'source-map-loader'},
			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
			{ test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/},//, options: {presets: ['@babel/env']}},
			{ test: /\.css$/, loader: 'style-loader!css-loader'},
			{ test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader' },
			{ test: /\.(png|jpg|gif)$/, loader: 'file-loader' }
		]
	}
};
