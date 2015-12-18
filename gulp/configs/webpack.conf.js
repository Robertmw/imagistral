var path = require('path'),
  webpack = require('webpack');

module.exports = {
  context: global.files.projectRoot,
  entry: {
    app: [
      global.files.sourceFolderPath  + 'js/' + global.files.js.main
    ],
     vendors: ['react', 'react-dom']
  },
  output: {
    path: files.buildFolderPath + 'js/',
    publicPath: 'http://localhost:3000/',
    filename: global.files.js.bundle,
    chunkFilename: '[id].' + global.files.js.bundle
  },
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
      }
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
