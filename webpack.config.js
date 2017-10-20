var webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
      app: './src/index.js',
      // print: './src/print.js'
    },
    plugins: [
      // new CleanWebpackPlugin(['dist']),
      // new HtmlWebpackPlugin({template: 'index.html'})
    ],
    devtool: 'source-map',
    // watch: true,
    // devServer: {
    //   contentBase: path.resolve(__dirname, 'dist')
    // },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              //resolve-url-loader may be chained before sass-loader if necessary
              use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
  };