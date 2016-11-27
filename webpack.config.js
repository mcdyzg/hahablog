var webpack = require('webpack')
var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var autoprefixer = require('autoprefixer');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');


module.exports = {
	devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
	    contentBase: './',
	    port: 8080
	},
	entry:{
		app:[
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080',
			'./src/app/app'
		],
		vendor:['react','react-dom']
	},
	output:{
		path:'dist',
		filename:'[name].js'
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		// 使用了此插件，那么就不会打开根目录下的index.html，而是新生成一个html，但是可以通过指定模板来引用已存在的html
		new HtmlwebpackPlugin({
	      	title: 'Webpack-demos',
	      	template: './index.html',
	      	//默认把入口的js加载进html的script标签上
	      	// chunks: ['vendor','app'],
	      	filename: 'index.html'
	    }),
		new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
	],
	module:{
		loaders: [
	      	{
		        test: /\.(js|jsx)$/,
		        loaders: ['babel'],
		        exclude: [nodeModulesPath]
		    },
		    {
		        test: /\.scss$/,
		        loader: 'style!css!postcss-loader!sass',
		        include: [path.resolve(__dirname, "src")],
		        exclude: [nodeModulesPath]
		    },
		    {
		        test: /\.css$/,
		        loader: 'style!css!postcss-loader',
		        include: [path.resolve(__dirname, 'src')],
		        exclude: [nodeModulesPath]
		    }
	    ]
	},
	postcss: [ autoprefixer({ browsers: ['> 5%'] }) ],
}