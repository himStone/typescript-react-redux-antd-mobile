'use strict';

var webpack = require('webpack'),
    config = require('./webpack.config'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    customTheme = require('../theme.json');

var path = require('path'),
    SRC_PATH = path.join(__dirname, '../src');
 
config.output.publicPath = '/static/dist/app/';
config.module.rules[0].use[1].options = {configFileName: "tsconfig.prod.json"};
config.module.rules[1].use = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
        {
            loader: "css-loader",
        },
        {
            loader: "postcss-loader"
        },
        {
            loader: "less-loader",
            options: {
                paths: [SRC_PATH],
                modifyVars: customTheme
            }
        },
    ]
});

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        output: {
            comments: false,
        }
    })
);
config.plugins.push(
    new ExtractTextPlugin({ 
        filename: "[name]-[hash].css",
        allChunks: true 
    })
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