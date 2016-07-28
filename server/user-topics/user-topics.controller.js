const UserTopic = require('./user-topics.model');


module.exports = {
  addUserTopic,
  getAllUserTopics,
  RemoveUserTopic,
};
/******** PUBLIC ********/

function addUserTopic(req, res) {
  // check to see if the user already has this topic.
  // if they do there is no need to add it to the db
  UserTopic.find({
    where: {
      topicId: req.topic.topicId,
      userId: req.topic.userId,
    }
  })
  .then(row => {
    if (!row) {
      UserTopic.create({
        topicId: req.topic.topicId,
        userId: req.topic.userId,
      })
      .catch(err => console.error(`Error writing usertopic to db: ${userTopic}`));
    }
  });
}

function getAllUserTopics(req, res) {
  UserTopic.find({
    where: {
      // pull userId off the token?
      userId: req.user.id
    }
  });
}

function removeUserTopic(req, res, next) {
  UserTopic.destroy({
    where: {
      userId: req.user.id,
      topicId: req.body.topicId,
    }
  });
  UserTopic.find({
    topicId: req.body.topicId,
  })
    .then(userTopics => {
      if(!userTopics) {
        next(null);
      }
    })
    .catch(err => console.error(`Error finding usertopics in db: ${err}`));
}