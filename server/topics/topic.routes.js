const TopicRouter = require('express').Router();
const TopicCtrl = require('./topic.controller');
const UserTopicsCtrl = require('../user-topics.controller');


TopicRouter.post('/add', TopicCtrl.addTopic, UserTopicsCtrl.addUserTopic);


module.exports = TopicRouter;

