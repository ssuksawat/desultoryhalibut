const TweetMetric = require('./twitter-model');
const Topic = require('../topics/topic.model');
const moment = require('moment');
const sequelize = require('../config/sequelize');

module.exports = {
  get: get,
};

/***** PUBLIC *****/

function get(req, res) {
  var topics = req.query.topics;
  const timeframe = req.query.timeframe;
  const numTimeUnits = timeframe.slice(0, timeframe.length - 1);
  const timeUnit = timeframe.charAt(timeframe.length - 1);
  const timerange = moment().subtract(numTimeUnits, timeUnit);

  // combining ORM query with a raw query in order to execute a subquery
  // inner query gets the ids of all topics passed by client; outer query
  // finds all tweetmetrics with those foreign key ids
  var stringTopics = '(';
  topics.forEach(topic => stringTopics += `'${topic}', `);
  stringTopics = stringTopics.slice(0, stringTopics.length - 2);
  stringTopics += ')';

  TweetMetric.findAll({
    where: {
      topicId: {
        $in: sequelize.literal(`(SELECT id FROM topics WHERE topic in ${stringTopics})`),
      },
      createdAt: {
        $gt: timerange,
      },
    },
  })
    .then(tweetMetrics => {
      tweetMetrics = tweetMetrics.map((tweetMetric) => {
        return tweetMetric.dataValues;
      });
      res.send(tweetMetrics);
    })
    .catch(() => res.sendStatus(500));
}
