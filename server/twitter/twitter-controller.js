const TweetData = require('./twitter-model');

module.exports = {
  get: get
};

/***** PUBLIC *****/

function get(req, res) {
  res.send([]);
  // TODO: Implement real model
  // TweetData.find()
  //   .then(data => res.send(data))
  //   .catch(err => {
  //     console.error('Error fetcing twitter data from DB: ', err);
  //     res.status(500).send({message: 'Error fetching data'});
  //   });
}
