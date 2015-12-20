var webpack = require('webpack'),
  webpackConfig = require('./configs/webpack.conf.js');

module.exports = function(gulp, plugins) {
  return function(done) {
    webpack(webpackConfig, function(err, stats) {
      if(err) throw new plugins.util.PluginError("webpack", err);
      else {
        plugins.util.log(stats.toString({
          assets: false,
          colors: true,
          cached: false,
          chunks: true,
          chunkModules: false,
          source: false,
          chunkOrigins: false
        }));
      }
      done();
    });
  };
};
