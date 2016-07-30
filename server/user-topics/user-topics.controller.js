const UserTopic = require('./user-topics.model');
const Topic = require('../topics/topic.model');


module.exports = {
  addUserTopic,
  getAllUserTopics,
  removeUserTopic
};

/******** PUBLIC ********/

function addUserTopic(req, res) {
  // check to see if the user already has this topic.
  // if they do there is no need to add it to the db
  UserTopic.findOne({
    where: {
      topicId: req.body.topic.id,
      userId: req.user.id,
    }
  })
  .then(row => {
    if (!row) {
      return UserTopic.create({
        topicId: req.body.topic.id,
        userId: req.user.id,
      })
    }
  })
  .then(() => res.sendStatus(201))
  .catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
}

function getAllUserTopics(req, res) {
  UserTopic.findAll({
    where: {
      userId: req.user.id
    },
    include: [Topic]
  })
  .then((results) => {
    res.json(results);
  })
  .catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
}

function removeUserTopic(req, res, next) {
  UserTopic.destroy({
    where: {
      userId: req.user.id,
      topicId: req.body.topic.id,
    }
  })
  .then(() => {
    return UserTopic.findOne({
      topicId: req.body.topic.id,
    });
  })
  .then(userTopic => {
    if(!userTopic) {
      next(null);
    }
  })
  .catch(err => res.sendStatus(500));

}
