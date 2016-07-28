const UserTopic = require('./user-topics.model');


module.exports = {
  addUserTopic,
  getAllUserTopics,
  removeUserTopic,
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
      .then(() => res.send(201))
      .catch(err => res.send(500));
    }
  });
}

function getAllUserTopics(req, res) {
  UserTopic.find({
    where: {
      userId: req.user.id
    }
  })
  .then((results) => {
    res.json(results);
  })
  .catch(() => res.send(500));
}

function removeUserTopic(req, res, next) {
  UserTopic.destroy({
    where: {
      userId: req.user.id,
      topicId: req.body.topicId,
    }
  })
  .then(() => {
    return UserTopic.findOne({
      topicId: req.body.topicId,
    });
  })
  .then(userTopic => {
    if(!userTopic) {
      next(null);
    }
  })
  .catch(err => res.sendStatus(500));

}