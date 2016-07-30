const path = require('path');

const env = process.env.NODE_ENV || 'development';
const rootPath = path.join(__dirname, '../..');

const config = {
  development: {
    rootPath: rootPath,
    port: process.env.PORT || '3000',
    secret: process.env.SECRET || 'all sphynxes are unique',
    db: process.env.DATABASE_URL || 'postgres://postgres@localhost/sidestreet',
    logLevel: process.env.LOG_LEVEL || 'dev',
    twitter: {
      consumer_key: process.env.TWITTER_CONSUMER_KEY || 'iuzErv06c19D6Jqo1xT8pJP1N',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'Z2AdiITIkBQPHi890hqaWIASlwEoc21G5Y2ggVsU9mEHuCFaOt',
      access_token: process.env.TWITTER_ACCESS_TOKEN || '4809076273-VX2m838DyN7xbXmr85RLj6y3wbxIZdWWKw4hFBj',
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'eJ7Yb42vXDZ0cpmlIQQyjDvYZfeDJKDXejsNWvsshRQsX'
    }
  },
  production: {
    rootPath: rootPath,
    port: process.env.PORT || '80',
    secret: process.env.SECRET || 'all sphynxes are unique',
    db: process.env.DATABASE_URL || 'postgres://postgres@localhost/sidestreet',
    logLevel: process.env.LOG_LEVEL || 'tiny',
    twitter: {
      consumer_key: process.env.TWITTER_CONSUMER_KEY || 'QVTSH5DZGllrzCOK6ZzJMdc7c',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '1T5fG8Spwnd6Owry9bdusvQP6ePo3bi4nHBda1r53kZl6vKMc8',
      access_token: process.env.TWITTER_ACCESS_TOKEN || '3327635388-191K4BPqdz4OdNrEvgZCojJMxXhqRUGXH3YJu0X',
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'gXN4stJjlcArq194B4LaSQL2vxlQlV5k6qIRtZ2HB4L8M',
    }
  }
};

module.exports = config[env];
