module.exports = {
  entry: {
    js: "./src/js/app.js"
  },
  output: {
    path: __dirname + '/dist',
    filename: "./js/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
    port: 8080,
    inline: true,
    historyApiFallback: true
  },
}
