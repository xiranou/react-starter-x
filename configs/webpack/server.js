const path = require('path');

module.exports = {
  entry: './app/server',
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../..', 'build'),
    filename: 'server.js'
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, '..', '..', 'app'),
      components: path.resolve(__dirname, '..', '..', 'app', 'components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  }
};
