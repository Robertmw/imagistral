var path = require('path'),
  projectRoot = path.join(__dirname, '/../../');

global.files = {
  projectRoot: projectRoot,
  sourceFolder: 'public/src',
  sourceFolderPath: projectRoot + 'public/src/',
  buildFolder: 'public\\dist',
  buildFolderPath: projectRoot + 'public/dist/',
  js: {
    all: projectRoot + 'public/src/js/**/*.js',
    main: 'main.js',
    mainPath: projectRoot + 'public/src/js/main.js',
    bundle: 'main.bundle.js'
  },
  css: {
    all: 'public/src/css/style.less',
    watch: 'public/src/css/**/*.less',
    buildFile: 'style.css'
  },
  html: {
    all: 'public/*.html'
  },
  fonts: {
    all: 'public/src/css/fonts/*'
  }
};
