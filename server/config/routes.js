var TwitterRouter = require('../twitter/twitter-router');


module.exports = function(app, config) {

  app.use('/api/twitter', TwitterRouter);

  // Serve index.html for all other requests - for client-side routing
  app.get('/*', (req, res) => {
    res.sendFile(config.rootPath + '/client/www/index.html');
  });

};
