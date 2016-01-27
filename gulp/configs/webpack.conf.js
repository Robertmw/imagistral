var path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: global.files.projectRoot,
  entry: {
    app: [
      global.files.sourceFolderPath  + 'js/' + global.files.js.main
    ],
     vendors: ['react', 'react-dom']
  },
  output: {
    path: global.files.buildFolderPath + 'js/',
    publicPath: 'http://localhost:3000/',
    filename: global.files.js.bundle,
    chunkFilename: '[id].' + global.files.js.bundle
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|dist|gulp)/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|dist|gulp)/,
        loaders: ['babel?cacheDirectory=true'],
      },
      {
        test: /\.less$/,
        /*loader: ExtractTextPlugin.extract(
          'css?sourceMap!' +
          'less?sourceMap'
        )*/
        loader: 'style!css!less'
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  eslint: {
    configFile: global.files.projectRoot + 'gulp/configs/.eslintrc',
    emitError: true,
    failOnError: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    //new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: {
        dedupe: true,
        minimize: true,
        except: ['$', 'exports', 'require']
      }
    })
  ]
};
