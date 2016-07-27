const sequelize = require('../config/sequelize');

var User = sequelize.define('user', {
  username: Sequelize.String,
  password: Sequelize.String,
  fullname: Sequelize.String,
  email: Sequelize.String
});

User.sync;

module.exports = {
  User
};