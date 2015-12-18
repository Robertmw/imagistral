var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  helpers;

helpers = {
  plugins: plugins,
  getTask: function(options) {
    return require('./' + options.taskName)(gulp, plugins, options);
  }
};

module.exports = helpers;
