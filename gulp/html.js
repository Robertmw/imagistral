module.exports = function(gulp, plugins) {
  return function() {
    return gulp
      .src(global.files.html.all)
      .pipe(gulp.dest(global.files.buildFolder));
  };
};
