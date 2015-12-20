var path = require('path');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] });

module.exports = function (gulp, plugins) {
	return function() {
		return gulp.src('public/src/css/style.less')
			.pipe(plugins.less({
		      paths: [ path.join(__dirname, 'public', 'src', 'css') ]
		    }))
			.pipe(plugins.less({
			    plugins: [autoprefix, cleancss]
			  }))
			.pipe(gulp.dest('./public/dist/css'));
	}
}