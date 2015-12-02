module.exports = function (grunt) {

	// project configuration

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less:{
			development:{
				files:{
					'public/dist/css/style.css': 'public/src/css/style.less',
				}
			}
		},
		browserify:{
			dist:{
				options:{
					transform: ['babelify']
				},
				files:{
					'public/dist/js/main.min.js': ['public/src/main.js'],
				}
			}
		},
		copy: {
			target: {
				files: [{
					expand: true,
					cwd: 'public/src/img',
					src: '**/*',
					dest: 'public/dist/img'
				},
				{
					expand: true,
					cwd: 'node_modules/font-awesome/fonts',
					src: '**/*',
					dest: 'public/dist/fonts'
				}]
			}
		},
		watch: {
			options: {
				dateFormat: function(time) {
					grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
					grunt.log.writeln('Waiting for more changes...');
				},
			},
			css: {
				files: ['public/src/**/*.less', 'public/src/**/**/*.less'],
				tasks: ['less']
			},
			js: {
				files: ['public/src/**/*.js'],
				tasks: ['browserify']
			}
		},
		nodemon: {
			dev: {
				script: 'index.js'
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: false
			},
			tasks: ['nodemon', 'watch']
		}
	});

	// load plugins

	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// tasks

	grunt.registerTask('default', ['browserify', 'less', 'copy', 'watch']);
}
