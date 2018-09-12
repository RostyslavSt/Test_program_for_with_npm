let path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // loaders: [
    //   { test: /\.js$/, loader: "babel" }
    // ]
  },
    
  watch: true
};