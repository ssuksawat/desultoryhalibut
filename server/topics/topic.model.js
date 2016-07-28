const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');
const TweetMetric = require('../twitter/twitter-model');


const Topic = sequelize.define('topic', {
  topic: { type: Sequelize.STRING, allowNull: false, unique: true },
});

Topic.sync();


module.exports = Topic;