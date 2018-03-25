const merge = require('webpack-merge');
const base = require('./webpack.base');

module.exports = merge(base, {
  devServer: {
    contentBase: './build',
  },
  mode: 'development',
});