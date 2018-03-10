const path = require('path');

module.exports = {
  entry: {
    site: './source/javascripts/site.js'
  },
  output: {
    path: path.resolve(__dirname + '/.tmp/webpack_output'),
    filename: 'javascripts/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
};