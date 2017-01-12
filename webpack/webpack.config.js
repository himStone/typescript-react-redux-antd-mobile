'use strict';

const path = require('path'),
    webpack = require('webpack'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    pxtorem = require('postcss-pxtorem');

const SRC_PATH = path.join(__dirname, '../src'),
    STATIC_PATH = path.join(__dirname, '../static'),
    DIST_PATH = path.join(__dirname, '../static/dist/app'),
    IMG_PATH = path.join(__dirname, '../src/img');

const __DEV__ = process.env.NODE_ENV !== 'production';

const bundleConfig = __DEV__ ? 
    require(STATIC_PATH + "/cache/bundle-config.json") 
    : require(STATIC_PATH + "/dist/lib/bundle-config.json");

module.exports = {
  	context: SRC_PATH,
	entry: {
        app: ['src/app.tsx']
    },
    output: {
        path: DIST_PATH,
        publicPath: '',
        filename: '[name]-[hash].js',
    	chunkFilename: '[name]-[chunkhash].js'
    },
    module: {
        loaders: [
            { 
                test: /\.ts(x?)$/,
                loaders: []
            },
            {
                test: /\.scss|.css$/,                
                loader: ''
            },
            {
                test: /\.(jpg|jpeg|png|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,                
                loader: 'file-loader?name=image/[name].[ext]'
            }
        ]
    },
    postcss: function () {
        return [
            autoprefixer({browsers: ['> 1%', 'last 4 versions']}),
            pxtorem({
                rootValue: 100,
                propWhiteList: [],
            }),
        ];
    },
    sassLoader: {
        includePaths: [SRC_PATH]
    },
    resolve: {
        root: [SRC_PATH],
        alias: {
            'img': IMG_PATH,
            'src': SRC_PATH
        },
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],        
        modulesDirectories: ['src', 'node_modules']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': __DEV__ ? JSON.stringify('development') : JSON.stringify('production')
        }),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            chunks: ['app'],
            template: SRC_PATH + '/template/' + (__DEV__ ? 'app.dev.html' : 'app.prod.html'),
            assets: {
                "style"  : "[name]-[hash].css",
            },
            bundleName: bundleConfig.bundle.js,
            minify: __DEV__ ? false : {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeRedundantAttributes: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeComments: true
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: __DEV__ ? require('../static/cache/bundle-manifest.json') : require('../static/dist/lib/bundle-manifest.json')
        })
    ]
};
