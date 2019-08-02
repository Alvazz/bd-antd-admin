'use strict';

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (app, defaultConfig) => {
  defaultConfig.plugins.push(
    new CopyPlugin([{
      from: path.join(app.baseDir, 'node_modules/nprogress/nprogress.js'),
      to: path.join(app.baseDir, 'build/nprogress.js'),
    },
    {
      from: path.join(app.baseDir, 'node_modules/nprogress/nprogress.css'),
      to: path.join(app.baseDir, 'build/nprogress.css'),
    },
    ])
  );

  return {
    ...defaultConfig,
    entry: {
      // login: [path.join(__dirname, '../client/pages/login/index.jsx')],
      main: [path.join(__dirname, '../client/pages/home/index.jsx')],
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx'],
      alias: {
        client: path.join(__dirname, '../client'),
        themes: path.join(__dirname, '../client/themes'),
      },
    },
  };
};
