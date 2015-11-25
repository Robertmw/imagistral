
const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');
/*const passport = require('passport');
const config = require('./config/config');*/

const models = join(__dirname, 'app/models');
const port = process.env.PORT || 3000;
const app = express();

module.exports = app;

// Bootstrap models
/*fs.readdirSync(join(__dirname, 'app/models')).forEach(function (file) {
  if (~file.indexOf('.js')) {
    require(join(__dirname, 'app/models', file));
  }
});*/

// Bootstrap routes
/*require('./config/passport')(passport);
require('./config/express')(app, passport);*/

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen () {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect("mongodb://localhost/cliw", options).connection;
}