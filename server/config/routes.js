const TwitterRouter = require('../twitter/twitter-router');
const TopicRouter = require('../topics/topic.routes');
const UserTopicsRouter = require('../user-topics/user-topics.routes');
const AuthRouter = require('../auth/auth.routes');
const passport = require('passport');


module.exports = function(app, config) {

  app.use('/api/twitter', passport.authenticate('jwt', {session: false}), TwitterRouter);
  app.use('/api/topic', passport.authenticate('jwt', {session: false}), TopicRouter);
  app.use('/api/usertopic', passport.authenticate('jwt', {session: false}), UserTopicsRouter);
  app.use('/api/auth', AuthRouter);

  // Serve index.html for all other requests - for client-side routing
  app.get('/*', (req, res) => {
    res.sendFile(config.rootPath + '/client/www/index.html');
  });

};
