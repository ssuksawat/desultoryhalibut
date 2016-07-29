const config = require('./config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.db, { logging: false });

sequelize.authenticate()
  .then(() => { console.log('Connected to database'); })
  .catch(err => { console.log(err); });


module.exports = sequelize;
