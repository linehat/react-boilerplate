const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const env = process.env.NODE_ENV;

module.exports = {
  //生成HTML
  htmlGenerate: new HtmlWebpackPlugin({
    title: 'react-boilerplate',
    chunksSortMode: 'dependency',
    favicon: path.resolve(__dirname, "../src/images/favicon.ico"),
    template: path.resolve(__dirname, env === 'development' ? '../entry/index.dev.ejs' : '../entry/index.ejs')
  }),
  //DLL加载
  dllReference: new webpack.DllReferencePlugin({
    manifest: path.resolve(__dirname, "../public/manifest.json")
  }),
  //热加载，用于开发环境，更新时返回更新的文件名而不是文件ID
  nameModules: new webpack.NamedModulesPlugin(),
  //热加载，用户开发环境
  hotReplacement: new webpack.HotModuleReplacementPlugin(),
  //3.0特性：作用域提升，参考：http://www.cnblogs.com/wmhuang/p/7065396.html
  moduleConcatenation: new webpack.optimize.ModuleConcatenationPlugin(),
  //JS压缩
  compress: new UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  //定义环境变量
  envDefine: new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env)
  }),
  //清除DIST目录,用于打包
  distClean: new CleanWebpackPlugin(['dist'], {
    verbose: true,
    root: path.resolve(__dirname, '../')
  }),
  //CSS单独打包
  cssExtract: new ExtractTextPlugin('./bundle.[hash].css'),
};