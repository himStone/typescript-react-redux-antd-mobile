'use strict';

var webpack = require('webpack'),
    config = require('./webpack.config'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");;

 
config.output.publicPath = '/static/dist/app/';
config.devtool = false;
config.module.loaders[0].loaders.unshift('ts-loader?configFileName=tsconfig.prod.json');
config.module.loaders[0].loaders.unshift('babel');
config.module.loaders[1].loader = ExtractTextPlugin.extract("style-loader", ['css-loader?-autoprefixer', 'postcss-loader', 'sass-loader']);

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false,
        },
        compress: {
            warnings: false
        }
    })
);
config.plugins.push(
    new ExtractTextPlugin("[name]-[hash].css")
);


var compiler = webpack(config);

function callback(err, stats) {
	if (err) {
		console.log(err);
	} else {
		console.log(stats.toString({
			colors: true,
			chunks: false,
			children: false,
		}));  
	}
}

compiler.run(callback);