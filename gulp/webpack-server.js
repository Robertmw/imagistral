var webpack = require('webpack'),
	webpackDevStream = require('webpack-dev-server'),
  webpackConfig = require('./configs/webpack.conf.js'),
	objectAssign = require('object-assign'),
  path = require('path');

module.exports = function(gulp, plugins) {
  return function() {
		webpackConfig = objectAssign({}, webpackConfig, {
      devtool: 'eval-cheap-module-source-map',
      debug: true
    });

    webpackConfig.entry.app.unshift('webpack/hot/dev-server');
    webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:3000');

    new webpackDevStream(webpack(webpackConfig), {
			contentBase: global.files.buildFolderPath,
			hot: true,
      noInfo: false,
      quiet: false,
      lazy: false, // No watching, but recompilation on every request
			historyApiFallback: true,
      stats: {
        assets: false,
        colors: true,
        cached: false,
        chunks: true,
        chunkModules: false,
        source: false,
        chunkOrigins: false
      }
    })
    .listen(3000, 'localhost', function(err) {
      if(err){
        throw new gutil.PluginError("webpack-dev-server", err);
      }
    });
  };
};