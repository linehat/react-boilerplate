const loaders = require('./webpack/loaders');
const commons = require('./webpack/commons');
const plugins = require('./webpack/plugins');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: __dirname + "/dist"
  },
  resolve: commons.resolve,
  module: {
    rules: [
      loaders.jsLoader,
      loaders.lessExtractLoader
    ]
  },
  plugins: [
    plugins.nameModules,
    plugins.moduleConcatenation,
    plugins.htmlGenerate,
    plugins.compress,
    plugins.envDefine,
    plugins.distClean,
    plugins.cssExtract
  ]
};
