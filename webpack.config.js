const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: 		__dirname,

	mode:			'development',

	entry:      	'./server.js',

	target: 		'node',

	node: {
		__dirname: false,
		__filename: false
	},

	externals:		[nodeExternals()],

	output: {
		filename:	'app.bundle.js',
		path:        __dirname + '/dist'
	},

	devtool:		'source-map',

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css'],
		modules: 	['./', 'node_modules']
	},

	plugins: [
		new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery' }),
		new CopyWebpackPlugin([{from: 'public', to: 'public'}])
	],

	module: {
		rules:	[
			{ enforce: 'pre', test: /\.jsx$/, loader: 'source-map-loader'},
			{ enforce: 'pre', test: /\.js?$/, loader: 'source-map-loader'},
			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
			{ test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/},
			{ test: /\.css$/, loader: 'node-style-loader!css-loader'},
			{ test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader' },
			{ test: /\.(png|jpg|gif)$/, loader: 'file-loader' }
		]
	},

	watchOptions: {
		ignored: /node_modules/
	}
};
