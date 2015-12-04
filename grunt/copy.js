module.exports = {
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
};