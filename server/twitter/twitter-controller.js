const TweetMetric = require('./twitter-model');
const moment = require('moment');
const Topic = require('../topics/topic.model');

module.exports = {
  get: get
};

/***** PUBLIC *****/

function get(req, res) {
  const topics = req.query.topics;
  const timeframe = req.query.timeframe;
  const timerange = moment().subtract(timeframe);

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
      const topicIds = topics.map(topic => topic.id);
      return TweetMetric.findAll({
        where: {
          topicId: {
            $in: topicIds
          },
          //TODO: insert moment logic
        }
      });
    })

    .then((tweetMetrics) => console.log(tweetMetrics)) // res.send(tweetMetrics))
    .catch((err) => console.error(err));//(res.sendStatus(500));
  
}


// test:
const request = {
  query: {
    topics: ['sports', 'godzilla']
  },
  timeframe: '1d'
};

get(request, null);