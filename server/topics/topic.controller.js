const Topic = require('./topic.model');

module.exports = {
  addTopic,
  removeTopic
};

/******** PUBLIC ********/

// add the topic from user input if it does not already exist in db
function addTopic(req, res, next) {
  console.log('~~~~~~~~~~~~~~~~>', req.body);
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
  .then(topic => {
    req.body.topic = topic;
    next(null);
  }) 
  .catch(err => {
    console.error(`Error writing topic to db: ${err}`);
    res.status(500).send({message: 'Error adding new topic'});
  });
}


function removeTopic(req, res) {
  Topic.destroy({
    where: {
      id: req.body.topicId
    }
  })
  .then(() => res.sendStatus(200))
  .catch(err => res.sendStatus(500));
}
