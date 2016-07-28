const Topic = require('./topic.model');

module.exports = {
  addTopic,
  getAllTopics,
  removeTopic,
};
/******** PUBLIC ********/

// add the topic from user input if it does not already exist in db
function addTopic(req, res, next) {
  Topic.find({
    topic: req.body.topic
  })
  .then(topics => {
    if (!topics) {
      return Topic.create({
        topic: req.body.topic
      });
    } else {
      return topics;
    }
  })
  .then((topic) => next(null, topic))
  .catch(err => console.error(`Error writing topic to db: ${err}`));
}

function getAllTopics(req, res) {
  Topic.find()
    .catch(err => console.error(`Error getting topics from db: ${err}`));
}

function removeTopic(req, res) {
  Topic.destroy({
    where: {
      id: req.body.topicId
    }
  })
    .catch(err => console.error(`Error deleting topic from db: ${err}`));
}
