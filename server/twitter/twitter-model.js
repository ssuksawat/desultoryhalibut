const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Topic = require('../topics/topic.model');

const TweetMetric = sequelize.define('tweetmetric', {
  score: { type: Sequelize.FLOAT },
  topicname: { type: Sequelize.STRING },
  volume: { type: Sequelize.INTEGER },
  topicId: { type: Sequelize.INTEGER },
}, {
  indexes: [{
    unique: false,
    fields: ['topicId', 'createdAt']
  }]
});

Topic.hasMany(TweetMetric, { foreignKey: 'topicId'});
TweetMetric.belongsTo(Topic, {foreignKey: 'topicId'});

TweetMetric.sync();

module.exports = TweetMetric;
