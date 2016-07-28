const twitterModels = require('../twitter/twitter-model');
const TwitterStreamChannels = require('twitter-stream-channels');
const config = require('../config/config')
const sentiment = require('sentiment');

const client = new TwitterStreamChannels(config.twitter)

const channels = {
  'nintendo' : ['nintendo'],
  'google' : ['google'],
  'ford': ['ford'],
  'disney': ['disney'],
  'genentech': ['genentech'],
  'gold': ['gold']
};

var stream = client.streamChannels({
  track: channels, 
  language: "en"
});


var cache = {};

Object.keys(channels).forEach(topic => {
  var channel = 'channels/' + topic;
  console.log(channel)
  var tag = '' + topic;
  cache[tag] = {sentiment: 0, total: 0};

  stream.on(channel, function(tweet) {
    cache[tag].total++;
    cache[tag].sentiment += sentiment(tweet.text).score;
    console.log('tag', tag, 'text', tweet.text, cache[tag].total, cache[tag].sentiment)
    });
})