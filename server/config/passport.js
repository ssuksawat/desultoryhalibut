const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const config = require('./config');
const User = require('../user/user.model');
const compare = require('./utils').comparePassword;


module.exports = {
  authLocal
};

passport.use(new JwtStrategy(
  {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  }, (jwtPayload, done) => {
    User.findOne({ where: { id: jwtPayload.id }})
      .then(user => {
        if (user) {
          //see if this still works if comment out req.user = user (i.e. it is done automatically)
          req.user = user;
          done(null, user);
        } else {
          done(null, false);
        }
      })
      .catch(done);
  }
));

function authLocal(req, res) {
  User.findOne({ where: { username: req.body.username }})
    .then(user => {
      if (user) {
        compare(req.body.password, user.password)
          .then(match => {
            if (!match) {
              done(null, false);
            } else {
              done(null, user);
            }
          });
      }
    });
}