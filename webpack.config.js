let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: "./scripts/app.js",
  output: {
    path: __dirname,
    filename: "build.js"
  },

  watch: true,
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'scripts'),
        exclude: /(node_modules|bower_components)/,

        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.hbs/,
        loader: "handlebars-loader"
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};