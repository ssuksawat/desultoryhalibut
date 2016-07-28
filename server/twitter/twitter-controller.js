const TweetMetric = require('./twitter-model');
const moment = require('moment');
const Topic = require('../topics/topic.model');

module.exports = {
  get
};

/***** PUBLIC *****/

function get(req, res) {
  const topics = req.query.topics;
  const timeframe = req.query.timeframe;
  const numTimeUnits = timeframe.slice(0, timeframe.length - 1);
  const timeUnit = timeframe.charAt(timeframe.length - 1);
  const timerange = moment().subtract(numTimeUnits, timeUnit);

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
            $in: topicIds,
          },
          createdAt: {
            $gt: timerange,
          },
        },
      });
    })

    .then((tweetMetrics) => {
      tweetMetrics = tweetMetrics.map((tweetMetric) => {
        return tweetMetric.dataValues;
      });
      res.send(tweetMetrics);
    })
    .catch((err) => res.sendStatus(500));
}