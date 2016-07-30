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
      consumer_key: process.env.TWITTER_CONSUMER_KEY || 'URBt6LanYTUDnvzmQEAQMId0F',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'qXOqcFMImuA0Zi09z8yzzFDJGRHvIVUiWlUiVlqPuZru6cwKgc',
      access_token: process.env.TWITTER_ACCESS_TOKEN || '3232137186-rdbsH7cp39IENWqSbeYbjQq5Q4PBOVCFpJ0hgjz',
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'myufOQRWeSnxkNzkWEA7iDHDjOAWUsK7nP9yqwVLKzBqO'
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
