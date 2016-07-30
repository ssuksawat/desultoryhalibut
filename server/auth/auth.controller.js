'use strict';

const jwt = require('jwt-simple');
const config = require('../config/config');
const utils = require('../config/utils');
const User = require('../users/user.model');
const compare = utils.comparePassword;


module.exports = {
  login,
	addUser,
	affirmValidToken,
};

function login(req, res) {
	let currentUser;
	User.findOne({ where: { username: req.body.username }})
    .then(user => {
			if (!user) { throw new Error('User not found'); }
			currentUser = user;
      return compare(req.body.password, user.password)
    })
		.then(match => {
			if (!match) { throw new Error('Wrong password'); }
			const token = jwt.encode({id: currentUser.id, username: currentUser.username }, config.secret);
			res.json({
				token: token,
				user: {
					id: currentUser.id,
					username: currentUser.username
				}
			});
		})
		.catch(err => {
			console.error(err);
			res.status(401).send({message: err.message});
		});
}

function addUser(req, res) {
	return utils.hashPassword(req.body.password)
		.then(hashedPassword => {
			req.body.password = hashedPassword;
			console.log('heres req.body: ', req.body);
			return User.create(req.body);
		})
		.then(newUser => {
			const token = jwt.encode({
				id: newUser.id,
				username: newUser.username
			}, config.secret);

			res.json({
				token: token,
				user: {
					id: newUser.id,
					username: newUser.username
				}
			});
		})
		.catch(err => {
			console.error(err);
			res.status(401).send({message: 'this username has already been taken'});
		});
}

function affirmValidToken(req, res) {
	res.send('valid token found');
}
