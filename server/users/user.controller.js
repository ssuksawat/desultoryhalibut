const User = require('./user.model');
const sequelize = require('../config/sequelize');

module.exports = {
  checkNumTopics
};

function checkNumTopics(req, res, next) {
  User.find({
    id: req.user.id
  })
  .then(user => {
    if (user.numtopics < 8) {
      //update the count
      console.log('numtopics ', user.numtopics);
      // sequelize.literal(`(UPDATE users SET numtopics = numtopics + 1 WHERE id=${req.user.id})`);
      User.update({
        numtopics: user.numtopics + 1,
      }, {
        where: {
          id: req.user.id,
        },
      });
      next(null);
    } else {
      res.sendStatus(401);
    }
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });
}

