module.exports = {
  dist:{
    options:{
      transform: ['babelify'],
      external: [
        '../node_modules/react/react.js',
        '../node_modules/react-dom/index.js'
      ]
    },
    files:{
      'public/dist/js/main.min.js': ['public/src/js/main.js'],
    }
  }
};
