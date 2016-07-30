const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config');
const User = require('../users/user.model');

passport.use(new JwtStrategy(
  {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  }, (jwtPayload, done) => {
    User.findOne({ where: { id: jwtPayload.id }})
    .then(user => {
      if (user) {
        //see if this still works if comment out req.user = user (i.e. it is done automatically)
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch(done);
  }
));
