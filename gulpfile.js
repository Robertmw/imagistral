require('./gulp/configs/files');

var gulp = require('gulp'),
	helpers = require('./gulp/helpers.js');

gulp.task("html", helpers.getTask({taskName: 'html'}));
gulp.task("scripts", helpers.getTask({taskName: 'scripts'}));
gulp.task("styles", helpers.getTask({taskName: 'styles'}));
gulp.task("copy", helpers.getTask({taskName: 'copy'}));
gulp.task("clean", helpers.getTask({taskName: 'clean'}));

gulp.task("watch", function() {
	
});

gulp.task("deploy", ['copy','scripts', 'styles']);

gulp.task("build", ['copy','scripts', 'styles'], function () {
	gulp.watch(global.files.css.watch, ['styles']);
	gulp.watch(global.files.js.all, ['scripts']);
});