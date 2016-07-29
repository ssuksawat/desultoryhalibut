'use strict';

const twitterModels = require('../twitter/twitter-model');
const TwitterStreamChannels = require('twitter-stream-channels');
const config = require('../config/config')
const sentiment = require('sentiment');
const Topic = require('../topics/topic.model');

const client = new TwitterStreamChannels(config.twitter)


let channels = {};
let stream = {};
let channelsID = {};

fetchAndSubscribe();
setInterval(fetchAndSubscribe, 30000);


function watchChannels() {
  let cache = {};
  Object.keys(channels).forEach(topic => {
    const channel = 'channels/' + topic;
    const tag = '' + topic;
    cache[tag] = {sentiment: 0, total: 0};
    stream.on(channel, function(tweet) {
      cache[tag].total++;
      cache[tag].sentiment += sentiment(tweet.text).score;
    });
  });

  setInterval(() => {
    for(var tag in cache){
      if(cache[tag].total !== 0){
        var average = cache[tag].sentiment/cache[tag].total;
          twitterModels.create({
            score: average,
            topicname: tag,
            volume: cache[tag].total,
            topicId: channelsID[tag]
          })
        cache[tag] = {sentiment: 0, total: 0};
      }
    }
  }, 10000)
}

function fetchAndSubscribe () {
  console.log('Refresh subscriptions...');
  Topic.findAll()
    .then(topics => {
      topics.forEach(function(tag) {
        console.log('Tag: ', tag.topic);
        const item = tag.topic;
        channels[item] = [item];
        channelsID[item] = tag.id;
      });
    })
    .then(unsubscribe)
    .then(subscribeToTopics)
    .then(watchChannels);
}

function subscribeToTopics() {
  stream = client.streamChannels({
    track: channels,
    language: "en"
  });
}

function unsubscribe() {
  if (stream.off) {
    stream.off();
  }
}
