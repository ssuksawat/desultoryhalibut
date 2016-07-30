const TopicRouter = require('express').Router();
const TopicCtrl = require('./topic.controller');
const UserTopicsCtrl = require('../user-topics/user-topics.controller');
const UserCtrl = require('../users/user.controller');


TopicRouter.post('/add', UserCtrl.checkNumTopics, TopicCtrl.addTopic, UserTopicsCtrl.addUserTopic);


module.exports = TopicRouter;
