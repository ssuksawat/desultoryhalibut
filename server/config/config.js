module.exports = {
  secret: process.env.SECRET || 'all sphynxes are unique',
  port: process.env.PORT || 3000,
  db: process.env.DB || 'sidestreet'
};