var TwitterRouter = require('../twitter/twitter-router');


module.exports = function(app) {

  app.use('/api/twitter', TwitterRouter);

};
