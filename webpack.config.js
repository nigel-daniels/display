//const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
	mode:			dev ? 'development' : 'production',
	context: 		path.join(__dirname, 'src'),
	devtool:		dev ? 'none' : 'source-map',
	entry:      	{
		app: './client.js'
	},
	resolve: {
		modules: 	[
			path.resolve('./src'),
			'node_modules'
		]
	},
	module: {
		rules:	[
			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
			{ test: /\.css$/, loader: 'style-loader!css-loader'},
			{ test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/i, loader: 'file-loader' }
		]
	},
	output: {
		filename:	'[name].bundle.js',
		path:        path.join(__dirname, 'dist')
	},
	plugins: [
		new CopyWebpackPlugin([{from: 'images', to: 'images'}])
	],
	watchOptions: {
		ignored: /node_modules/
	}
};
