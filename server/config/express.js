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
};
