/*!
 * Imagistral's Gruntfile
 * https://github.com/Robertmw/cliw
 */

module.exports = function (grunt) {

	'use strict';

  require('load-grunt-config')(grunt);

	grunt.registerTask('default', ['browserify', 'less', 'copy', 'watch']);
	grunt.registerTask('webpack', ['webpack']);

}
