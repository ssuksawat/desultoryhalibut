const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy();
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
  }, (jwt_payload, done) => {
    User.findOne({ where: { id: jwt_payload.id }})
      .then(user => {
        if (user) {
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
              req.user = user;
              done(null);
            }
          });
      }
    });
}




// TODO
// create the user model
// add a comparePassword function to utils