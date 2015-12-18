var rimraf = require('gulp-rimraf');

module.exports = function(gulp, plugins) {
	return function() {
		return gulp.src('public/dist')
					.pipe(rimraf({ force: true }));
	}
}