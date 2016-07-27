const sequelize = require('../config/sequelize');

const User = sequelize.define('user', {
  username: { type: Sequelize.String, allowNull: false, unique: true},
  password: { type: Sequelize.String, allowNull: false },
  fullname: {type: Sequelize.String, allowNull: false},
  email: {type: Sequelize.String, allowNull: false, unique: true}
});

User.sync;

module.exports = {
  User
};