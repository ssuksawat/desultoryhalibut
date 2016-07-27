const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');


const Topic = sequelize.define('topic', {
  topic: { type: Sequelize.STRING, allowNull: false, unique: true },

});

Topic.sync();

module.exports = Topic;