const UserTopicsRouter = require('express').Router();
const UserTopicCtrl = require('./user-topics.controller');
const TopicCtrl = require('../topics/topic.model');

UserTopicsRouter.post('/addTopic', UserTopicCtrl.addUserTopic);
UserTopicsRouter.get('/getAllTopics', UserTopicCtrl.getAllUserTopics);
UserTopicsRouter.delete('/removeTopic', UserTopicCtrl.removeUserTopic, TopicCtrl.removeTopic);

module.exports = UserTopicsRouter;