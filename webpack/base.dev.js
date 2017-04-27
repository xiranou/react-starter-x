const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const env = process.env.NODE_ENV || 'development';
const debug = ['development', 'test'].includes(env);

module.exports = {
  devtool: debug ? 'eval-source-map' : null,
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, '../', 'app'),
      components: path.resolve(__dirname, '../', 'app', 'components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sc|sa|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]-[local]-[hash:base64:6]',
                sourceMap: debug,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')],
                sourceMap: 'inline'
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: debug
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.css',
      allChunks: true
    })
  ]
};
