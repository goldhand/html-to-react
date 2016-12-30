'use strict';
var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: 'html-to-react.js',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
};
