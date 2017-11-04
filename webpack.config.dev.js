const loaders = require('./webpack/loaders');
const commons = require('./webpack/commons');
const plugins = require('./webpack/plugins');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  devtool: 'source-map',

  resolve: commons.resolve,
  module: {
    rules: [
      loaders.jsHotLoader,
      loaders.lessLoader,
      loaders.cssLoader
    ]
  },
  devServer: {
    historyApiFallback: {
      index: "dist/index.html"
    },
    port: 8080,
    host: 'localhost',
    hot: true,
  },
  plugins: [
    plugins.nameModules,
    plugins.hotReplacement,
    plugins.moduleConcatenation,
    plugins.htmlGenerate,
    plugins.dllReference,
  ]
};
