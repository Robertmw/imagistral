module.exports = function(gulp, plugins) {
	return function () {
		return gulp.src(global.files.fonts.all)
					.pipe(gulp.dest('public/dist/css/fonts'));
	}
}