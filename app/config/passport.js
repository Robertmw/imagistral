/*!
 * Module dependencies.
 */

const mongoose = require('mongoose');
const User = mongoose.model('User');

const facebook = require('./passport/facebook');

/**
 * Expose
 */

module.exports = function (passport) {

  // serialize sessions
  passport.serializeUser(function (user, cb) {
    cb(null, user.id);
  });
  passport.deserializeUser(function (id, cb) {
    User.load({ criteria: { _id: id } }, cb);
  });

  // use these strategies
  passport.use(facebook);
};