'use strict';

var webpack = require('webpack');

var config = {
  context: __dirname + '/src',
  entry: './app.js',
  output: {
    path: __dirname + '/dist', // dist in the destination
    filename: 'bundle.js',
    publicPath: '/assets',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname + '/src',
    port: 3000,
  },
};

module.exports = config;
