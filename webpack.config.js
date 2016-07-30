var path = require('path');

var config = {
  context: path.join(__dirname, 'client'),
  devtool: "#inline-source-map",
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'client/www/dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'url?prefix=font/&limit=5000'
      }
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
    victory: require.resolve("victory/dist/victory")
    }
  }
};

module.exports = config;
