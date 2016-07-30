const Topic = require('./topic.model');

module.exports = {
  addTopic,
  removeTopic
};

/******** PUBLIC ********/

// add the topic from user input if it does not already exist in db
function addTopic(req, res, next) {
  console.log('~~~~~~~~~~~~~~~~>', req.body);
  Topic.findOne({
    where: {topic: req.body.topic}
  })
  .then(topic => {
    console.log('Yo topic! ', topic);
    if (!topic) {
      console.log('I create yo shet');
      return Topic.create({
        topic: req.body.topic
      });
    } else {
      return topic;
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
