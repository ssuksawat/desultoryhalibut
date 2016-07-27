const TwitterRouter = require('express').Router();
const TwitterController = require('./twitter-controller');

TwitterRouter.get('/', TwitterController.get);

module.exports = TwitterRouter;
