const path = require('path');
const env = process.env.NODE_ENV || 'development';
const debug = ['development', 'test'].includes(env);

module.exports = {
  devtool: debug ? 'eval-source-map' : null,
  output: {
    path: path.resolve(__dirname, '../..', 'build'),
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, '../..', 'app'),
      components: path.resolve(__dirname, '../..', 'app', 'components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};
