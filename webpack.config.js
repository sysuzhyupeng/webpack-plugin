var path = require('path');
var webpack = require('webpack');
var HelloWorldPlugin = require('./app/my-plugin');

var PATHS = {
	app: path.join(__dirname, 'app/index'),
	build: path.join(__dirname, 'build')
};

var baseConfig = {
	entry: {
		app: PATHS.app,
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: [{
				loader: 'my-loader'
			}]
		},{
			test: /\.css$/,
			/*
				css-loader：css-loader 将 @import 替换为 require（也是通过 css-loader 来处理）,
				url(...) 替换为 @import，这样就把所有的依赖转化为了 require 的形式。
			*/
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}]
		}, {
			test: /\.less$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}, {
				loader: 'less-loader'
			}]
		}, {
			//识别url，将png替换成base64
			test: /\.svg$/,
			use: [{
				loader: 'url-loader',
				query: {
					limit: 10000
				}
			}]
		}]
	},
	plugins: [
    	new HelloWorldPlugin({options: true})
  	]
};
module.exports = baseConfig