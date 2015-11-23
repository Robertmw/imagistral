module.exports = function (grunt) {

	// project configuration

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less:{
			development:{
				files:{
					'bin/css/style.css': 'lib/css/style.less'
				}
			}
		},
		browserify:{
			dist:{
				options:{
					transform: ['babelify']
				},
				files:{
					'bin/js/app.min.js': ['lib/js/app.js']
				}
			}
		}
	});

	// load plugins

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-less');

	// tasks

	grunt.registerTask('default', ['browserify', 'less']);
}
