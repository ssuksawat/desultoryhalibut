const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const tweetMetrics = sequelize.define('tweetmetric', {
  score: {type: Sequelize.FLOAT},
  topic: {type: Sequelize.STRING},
  volume: {type: Sequelize.INTEGER}
});

tweetMetrics.sync();

module.exports = tweetMetrics;