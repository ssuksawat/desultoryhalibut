const TweetMetrics = require('./twitter-model');
const moment = require('moment');
const Topic = require('../topics/topic.model');

module.exports = {
  get: get
};

/***** PUBLIC *****/

function get(req, res) {
  const topics = req.query.topics;
  const timeframe = req.query.timeframe;
  const moment = moment.invoke().subtract(timeframe);

  // convert the topic names to topic IDs using the Topics table
  // then lookup sentiment using topic IDs which is an index for the 
  // TweetMetrics table
  Topic.findAll({
    where: {
      topic: {
        $like: {
          $any: topics
        }
      }
    }
  })
    .then((topics) => {
      // get the all the topic primary keys and find all tweetMetrics
      // whose foreign key matches.
      TweetMetrics.findAll({
      })
    })
    .then()
  
}


//TODO: add an index on the topicId foreign key column of tweetMetrics