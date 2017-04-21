const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: './app/client',
  output: {
    path: path.resolve(__dirname, '..', '..', 'build'),
    filename: 'client.js'
  },
  resolve: {
    alias: {
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
