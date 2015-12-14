/*!
 * Imagistral's Gruntfile
 * https://github.com/Robertmw/cliw
 */

 'use strict';

 module.exports = function (grunt) {


	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		eslint: {
			target: ['public/src/js/*.js', 'public/src/js/**/*.js']
		},
		browserify: {
			dist:{
				options:{
					transform: ['babelify'],
					external: [
						'../node_modules/react/react.js',
						'../node_modules/react-dom/index.js',
						'../bower_components/fabric.js/dist/fabric.min.js'
					]
				},
				files:{
					'public/dist/js/main.min.js': ['public/src/js/main.js'],
				}
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
			},
			dist: {
				files: {
					'public/dist/js/main.min.js': ['public/dist/js/main.min.js']
				}
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: false
			},
			tasks: ['nodemon', 'watch']
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
					cwd: 'public/src/css/fonts',
					src: '**/*',
					dest: 'public/dist/css/fonts'
				}]
			}
		},
		less: {
			development:{
				files:{
					'public/dist/css/style.css': 'public/src/css/style.less',
				}
			}
		},
		watch: {
			options: {
				dateFormat: function(time) {
					grunt.log.writeln('The watch finished in ' + time + 'ms at ' + (new Date()).toString());
					grunt.log.writeln('Waiting for more changes...');
				},
			},
			css: {
				files: ['public/src/**/*.less', 'public/src/**/**/*.less'],
				tasks: ['less']
			},
			js: {
				files: ['public/src/**/*.js'],
				tasks: ['eslint', 'browserify']
			}
		}
	});

	grunt.registerTask('default', 'The default build task', ['dev', 'watch']);
	grunt.registerTask('dev', 'The development build task', ['eslint', 'browserify', 'uglify', 'less', 'copy']);

}
