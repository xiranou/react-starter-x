const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    client: [
      'babel-polyfill',
      './app/client'
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};
