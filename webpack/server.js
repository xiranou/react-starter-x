const path = require('path');

module.exports = {
  entry: {
    server: [
      'babel-polyfill',
      './app/server'
    ]
  },
  target: 'node'
};
