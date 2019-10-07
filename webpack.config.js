//const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode:			'development',
	context: 		path.join(__dirname, 'src'),
	devtool:		'source-map',
	entry:      	{
		app: './client.js'
	},
	resolve: {
		//extensions: ['.js', '.jsx', '.json', '.css'],
		modules: 	[
			path.resolve('./src'),
			'node_modules'
		]
	},
	module: {
		rules:	[
			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
			{ test: /\.css$/i, use: ['style-loader','css-loader']},
			{ test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader' },
			{ test: /\.(png|jpg|gif)$/, loader: 'file-loader' }
		]
	},
	output: {
		filename:	'[name].bundle.js',
		path:        path.join(__dirname, 'dist')
	},
	plugins: [
		//new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery' }),
		new CopyWebpackPlugin([{from: 'images', to: 'images'}])
	],
	externals:		[nodeExternals()],
	watchOptions: {
		ignored: /node_modules/
	}
};
