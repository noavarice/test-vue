const merge = require('webpack-merge');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const base = require('./webpack.base');

module.exports = merge(base, {
  plugins: [
    new UglifyPlugin(),
  ],
  mode: 'production',
});
