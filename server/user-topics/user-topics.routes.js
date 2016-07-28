const UserTopicsRouter = require('express').Router();
const UserTopicCtrl = require('./user-topics.controller');
const TopicCtrl = require('../topics/topic.controller');

UserTopicsRouter.get('/getAll', UserTopicCtrl.getAllUserTopics);
UserTopicsRouter.delete('/remove', UserTopicCtrl.removeUserTopic, TopicCtrl.removeTopic);

module.exports = UserTopicsRouter;
