const jwt = require('jwt-simple');
const config = require('../config/config');
const utils = require('../config/utils');

module.exports  = {
	login,
	addUser,
	affirmValidToken
}

function login(req, res) {
	const token = jwt.encode({
		id: req.user.id,
		username: req.user.username
	}, config.secret);
	res.json({
		token: token,
		user: {
			id: req.user.id,
			username: req.user.username
		}
	});
}

function addUser(req, res) {
	return utils.hashPassword(req.body.password)
		.then(hashedPassword => {
			req.body.password = hashedPassword;
			return userCtrl.createUser(req, res); //<~~~~~~~~~require userctrl and create createUser fn
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