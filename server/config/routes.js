const TwitterRouter = require('../twitter/twitter-router');
const TopicRouter = require('../topics/topic.routes');
const UserTopicsRouter = require('../user-topics/user-topics.routes');
const AuthRouter = require('../auth/auth.routes');


module.exports = function(app, config) {

  app.use('/api/twitter', TwitterRouter);
  app.use('/api/topic', TopicRouter);
  app.use('/api/usertopic', UserTopicsRouter);
  app.use('/api/auth', AuthRouter);

  // Serve index.html for all other requests - for client-side routing
  app.get('/*', (req, res) => {
    res.sendFile(config.rootPath + '/client/www/index.html');
  });

};
