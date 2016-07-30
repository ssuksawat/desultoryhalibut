const authRouter = require('express').Router();
const authCtrl = require('./auth.controller.js');
const passport = require ('passport');

authRouter.post('/login', passport.authenticate('local'), authCtrl.login);
authRouter.post('/signup', authCtrl.addUser);
authRouter.post('/checkToken', passport.authenticate('jwt', {session: false}), authCtrl.affirmValidToken);

module.exports = authRouter;