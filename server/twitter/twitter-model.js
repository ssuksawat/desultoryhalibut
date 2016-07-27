const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

var tweetMetrics = sequelize.define('tweetmetric', {
  score: {type: Sequelize.FLOAT},
  topic: {type: Sequelize.STRING},
  volume: {type: Sequelize.INTEGER},
})

tweetmetric.Sync();

module.exports = tweetMetric;