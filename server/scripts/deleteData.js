const tweetTags = require('../twitter/twitter-model');
const cron = require('node-cron');
const moment = require('moment');


cron.schedule('00 30 3 * * *', function(){ //run cron job at 330 am every day
  tweetTags.destroy({where: {
	createdAt: { $lt: moment().subtract(1, 'day'); }
  }});
});

