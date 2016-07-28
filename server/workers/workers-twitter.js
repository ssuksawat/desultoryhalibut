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

// var saveTweet = function(tag, tweet){
//   var sentimentData = sentiment(tweet.text);
//   if(sentimentData.score !== 0 ) {
//     twitterModels.Tweet.create({ tweet: tweet.text, sentiment: sentimentData.score, tag: tag});
//   }
// };
var stream = client.streamChannels({track:channels});

// for(var topic of channels) {
//   var channel = 'channels/' + topic;
//   console.log(channel)
//     var tag = '' + topic;
//     stream.on(channel, function(tweet) {
//       console.log('tag: ', tag);
//       console.log('asdsddf', tweet.text);
//     });
// }

var cache = {};

Object.keys(channels).forEach(topic => {
  var channel = 'channels/' + topic;
  console.log(channel)
  var tag = '' + topic;
  cache[tag] = {sentiment: 0, total: 0};

  stream.on(channel, function(tweet) {
    cache[tag].total++;
    cache[tag].sentiment += sentiment(tweet.text).score;
    console.log('tag', tag, cache[tag].total, cache[tag].sentiment)
    });
})

setInterval(() => {
  // var oldCache = cache;
  // cache = {}
  for(tag in cache){
    if(cache[tag].total !== 0){
      var average = cache[tag].sentiment/cache[tag].total;
        twitterModels.create({
          score: average,
          topic: tag,
          volume: cache[tag].total
        })
      cache[tag] = {sentiment: 0, total: 0};
    }
  }
}, 1000)

// keywords used for live Twitter stream
// const channelz = {
//   'nintendo': ['nintendo'],
//   'google': ['google'],
//   'ford': ['ford'],
//   // 'disney': ['disney'],
//   // 'genentech': ['genentech'],
//   // 'gold': ['gold'],
//   // 'negative': ['sell', 'volatility', 'panic', 'hedge'],
//   // 'markets': ['dow', 's&p', 'stocks'],
// };

// const channels = [
//   ['nintendo'],
//   ['google'],
//   ['ford'],
// ]

// var client = new TwitterStreamChannels(config.twitter)
// // worker connects to Twitter API and starts stream
// var stream = client.streamChannels({track:channelz});

// // var saveTweet = function(tag, tweet){
// //   var sentimentData = sentiment(tweet.text);
// //   if(sentimentData.score !== 0 ) {

// //     twitterModels.Tweet.create({ tweet: tweet.text, sentiment: sentimentData.score, tag: tag});
// //   }
// // };

// setInterval(function() {
//   for(var index = 0; index < channels.length; index++){
//     var channel = 'channels/' + channels[index][0];
//     console.log('dsafds', channel);
//     stream.on(channel, function(tweet) {
//       // var tag = channels[index][0];
//       console.log('>languages',tweet, tag);//any tweet with 'javascript','php','java','python','perl' 
//     });
//   }
// }, 5000)

// var saveTweet = function(tag, tweet){
//   var sentimentData = sentiment(tweet.text);
//   if(sentimentData.score !== 0 ) {
//     twitterModels.Tweet.create({ tweet: tweet.text, sentiment: sentimentData.score, tag: tag});
//   }
// };


// const averageTweets = function(tweets, topic) {
//   var tweets;
//   const average = tweets.reduce(function(a, b) {
//     return a + b.sentiment;
//   }, 0);

//   const numTweets = tweets.length;
//   const tgroupAverage = {
//     numTweets: numTweets,
//     sentimentAverage: average / numTweets,
//     time: Date.now()
//   };

//   twitterModels.TweetAverage.find({keyword: topic}, function(err, t) {
//     if(!err) {
//       if(t.length > 0) {
//         twitterModels.TweetAverage.update({keyword: topic}, {$push: { data: tgroupAverage }}, function(err) {
//           if(!err) {
//             console.log('Record updated');
//           }
//         });
//       } else {
//         twitterModels.TweetAverage.create({keyword: topic, data: [' ']}, function (err) {
//         });
//       }
//     } else {
//       console.log(err);
//     }
//   });
// }


// var findTweet = function(topic){
//   const interval = 60000;
//   const previousDate = Date.now() - interval;
//   console.log(previousDate);
//   twitterModels.Tweet.find({tag: topic, time: {$gte: previousDate}}, function(err, tweets) {
//     if(err) {
//       console.log(err);
//     } else {
//       averageTweets(tweets, topic);
//     }
//   });
// };



// const getCollections = function(channels) {
//   for(var topic in channels) {
//     findTweet(topic);
//   }
// };

// module.exports = {
//   getCollections: getCollections,
//   channels: channels
// };
