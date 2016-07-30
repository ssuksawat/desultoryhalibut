const express = require('express');
const config = require('./config/config');

const app = express();

require('./config/sequelize');
require('./config/passport');
require('./config/express')(app, config);
require('./config/routes')(app, config);

const server = app.listen(config.port, function() {
  const port = server.address().port;
  console.log(`Listening on ${port}`);
});

module.exports = app;
