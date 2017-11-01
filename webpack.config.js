var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  devtool: "source-map", 
  module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react']
      }
    },
	{
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader'
          }
        ]
    },
	{
		test: /\.less$/,
		exclude: /node_modules/,
		loader: 'style-loader!css-loader!less-loader'
	},
	{
		test: /\.scss$/,
		exclude: /node_modules/,
		loader: 'style-loader!css-loader!sass-loader'
	},
	{ //背景图片
		test: /\.(jpg|png|gif)$/,
		loader: "url-loader?limit=1024&name=[name].[ext]",
		options: {
			publicPath: '/'
		}
	},
	{//字体文件
		test:/\.(eot|woff|svg|ttf|woff2|gif|appcache|mp3)(\?|$)/,
		loader:'file-loader?name=[name].[ext]',
		options: {
			publicPath: '/'
		}
	}
  ]
},
	plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};