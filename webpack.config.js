'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: [
    './app.js',
    './app.css'
  ],
  output: {
    path: __dirname + '/dist', // dist in the destination
    filename: 'bundle.js',
    publicPath: '/assets',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader',
          ]
        })
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname + '/',
    port: 3000,
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css'
    }),
  ],
};
