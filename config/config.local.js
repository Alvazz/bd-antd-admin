'use strict';

// exports.react = {};

module.exports = {
  react: {
    static: true,
  },
  security: {
  // 关闭CSRF攻击防范
    csrf: {
      enable: false,
    },
  },
};
