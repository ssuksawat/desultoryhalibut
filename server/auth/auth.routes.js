const passport = require('passport');
const authRouter = require('express').Router();
const authCtrl = require('./auth.controller.js');

authRouter.post('/login', authCtrl.login);
authRouter.post('/signup', authCtrl.addUser);
authRouter.post('/checkToken', passport.authenticate('jwt'), authCtrl.affirmValidToken);

module.exports = authRouter;
