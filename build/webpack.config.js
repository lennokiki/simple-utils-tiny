const path = require('path');

module.exports = {
  resolve: {
    alias: {
      "@": path.join(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  mode: "none",
  devtool: "inline-source-map"
}
