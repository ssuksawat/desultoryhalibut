const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');

module.exports = function(app, config) {
  app.use(morgan(config.logLevel));
  app.use(passport.initialize());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(express.static(config.rootPath + '/client/www'));

  // Use Webpack hot-reloading when NOT in production
  if (process.env.NODE_ENV !== 'production') {

    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackConfig = require('../../webpack.config');
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
      hot: true,
      filename: 'bundle.js',
      publicPath: '/',
      stats: {
        colors: true,
      },
      historyApiFallback: true,
    }));
  }
};
