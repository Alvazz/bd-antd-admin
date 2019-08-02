'use strict';

const path = require('path');

module.exports = appInfo => ({
  keys: 'key',
  webpack: {
    custom: {
      configPath: path.join(__dirname, './webpack.config.js'),
    },
  },
  router: {
    root: '/pages',
    entry: 'page',
  },
  react: {
    static: true,
  },
  security: {
    domainWhiteList: ['localhost:6001'],
  },
  // static: {
  //   dir: [{
  //       prefix: '/public',
  //       dir: path.join(appInfo.baseDir, '/app/public'),
  //     },
  //     {
  //       prefix: '/build',
  //       dir: path.join(appInfo.baseDir, '/build'),
  //     },
  //   ],
  // },
  session: {
    key: 'BEIDOU_SESS',
    maxAge: 1 * 3600 * 1000, // 1 hour
    httpOnly: true,
    encrypt: true,
  },
});