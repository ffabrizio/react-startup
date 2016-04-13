var webpack = require('webpack');
var config = require('./webpack.config.base.js');

config.bail = true;
config.debug = false;
config.profile = false;
config.devtool = '#source-map';
config.entry = './src/index';
config.plugins = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      warnings: false,
      screw_ie8: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
]);

config.output = {
  path: './dist',
  pathInfo: true,
  publicPath: '/dist/',
  filename: 'bundle.[hash].min.js'
};

module.exports = config;