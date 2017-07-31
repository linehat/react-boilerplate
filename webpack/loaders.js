const ExtractTextPlugin = require('extract-text-webpack-plugin');

const babelLoader = {
  loader: "babel-loader",
  options: {
    presets: ["env", "react", "stage-0"],
    plugins: [
      [
        "import",
        {
          "style": false,
          "libraryDirectory": "lib",
          "libraryName": "antd"
        }
      ]
    ]
  }
};

/**
 * babel loaders
 */
module.exports = {
  //热加载LOADER
  jsHotLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "react-hot-loader/webpack"
      },
      babelLoader
    ]
  },
  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      babelLoader
    ]
  },
  lessLoader: {
    test: /\.less$/,
    use: ["style-loader", "css-loader", "less-loader"]
  },
  cssLoader: {
    test: /\.css/,
    use: ["style-loader", "css-loader"]
  },
  lessExtractLoader: {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: ["css-loader", "less-loader"]
    })
  }
};