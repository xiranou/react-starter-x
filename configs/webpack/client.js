const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
    './app/client'
  ],
  output: {
    path: path.resolve(__dirname, '..', '..', 'build'),
    filename: 'client.js'
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
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};
