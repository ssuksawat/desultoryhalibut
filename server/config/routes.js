const TwitterRouter = require('../twitter/twitter-router');
const TopicRouter = require('../topics/topic.routes');
const UserTopicsRouter = require('../user-topics/user-topics.routes');
const AuthRouter = require('../auth/auth.routes');


module.exports = function(app) {

  app.use('/api/twitter', TwitterRouter);
  app.use('/api/topic', TopicRouter);
  app.use('/api/usertopic', UserTopicsRouter);
  app.use('/api/auth', AuthRouter);
};
