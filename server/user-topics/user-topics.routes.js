const UserTopicsRouter = require('express').Router();
const UserTopicCtrl = require('./user-topics.controller');
const TopicCtrl = require('../topics/topic.model');

<<<<<<< HEAD
UserTopicsRouter.get('/getAll', UserTopicCtrl.getAllUserTopics);
UserTopicsRouter.delete('/remove', UserTopicCtrl.removeUserTopic, TopicCtrl.removeTopic);
=======
UserTopicsRouter.post('/addTopic', UserTopicCtrl.addUserTopic);
UserTopicsRouter.get('/getAllTopics', UserTopicCtrl.getAllUserTopics);
UserTopicsRouter.delete('/removeTopic', UserTopicCtrl.removeUserTopic, TopicCtrl.removeTopic);
>>>>>>> 75cab2dfc5b43d372c6134920e90d3a533d7fdd6

module.exports = UserTopicsRouter;