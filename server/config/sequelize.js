const Sequelize = require('sequelize');
const config = require('./config');
const sequelize = new Sequelize(config.db);

sequelize.authenticate()
  .then(() => { console.log('Connected to databse'); })
  .catch(err => { console.log(err); });


module.exports = {
  sequelize
};

