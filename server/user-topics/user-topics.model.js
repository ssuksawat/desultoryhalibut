const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');
const User = require('../users/user.model');
const Topic = require('../topics/topic.model');


const UserTopic = sequelize.define('usertopic', {
  userId: Sequelize.INTEGER,
  topicId: Sequelize.INTEGER
});

User.belongsToMany(Topic, { through: UserTopic });
Topic.belongsToMany(User, { through: UserTopic });
UserTopic.belongsTo(Topic);

UserTopic.sync();

module.exports = UserTopic;
