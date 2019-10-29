var nodeExternals = require('webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: 		__dirname,

	entry:      	'./index.js',

	output: {
		filename:	'server.js',
		path:        __dirname + '/../dist'
	},

	resolve: {
		extensions: ['.js', '.json'],
		modules: 	['./', 'node_modules']
	},

	module: {
		rules:[
			{ enforce: 'pre', test: /\.js?$/, loader: 'source-map-loader'},
			{ test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/},
		]
	},

	target: 		'node',

	node: {
		__dirname: false,
		__filename: false
	},

	externals:		[nodeExternals()],

	plugins: [
		new CopyWebpackPlugin([
			{from:	'node_modules',		to:	'../dist/node_modules'},
			{from: 	'views',			to: '../dist/views'},
			{from:	'images', 	to: '../dist/public/images'}
		])
	]
};
