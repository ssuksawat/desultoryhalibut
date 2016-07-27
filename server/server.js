const express = require('express');
const config = require('./config/config');

const app = express();

require('./config/express')(app, config);
require('./config/routes')(app);

const server = app.listen(config.port, function() {
  const port = server.address().port;
  console.log(`Listening on ${port}`);
});

module.exports = app;
