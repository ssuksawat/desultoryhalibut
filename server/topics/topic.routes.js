const TopicRouter = require('express').Router();
const TopicCtrl = require('./topic.controller');
const UserTopicsCtrl = require('../user-topics.controller');


TopicRouter.post('/addTopic', TopicCtrl.addTopic, UserTopicsCtrl.addUserTopic);
TopicRouter.get('/getAllTopics', TopicCtrl.getAllTopics);


module.exports = TopicRouter;

