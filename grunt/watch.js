module.exports = {
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
};