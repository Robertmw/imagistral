const mongoose = require('mongoose');
const User = mongoose.model('User');
const utils = require('../../lib/utils');

/**
 * Load
 */

exports.load = function (req, res, next, id) {
  const options = {
    criteria: { _id : id }
  };
  User.load(options, function (err, user) {
    if (err) return next(err);
    if (!user) return next(new Error('Failed to load User ' + id));
    req.profile = user;
    next();
  });
};


exports.signin = function () {};

/**
 * Auth callback
 */

exports.authCallback = login;

/**
 * Logout
 */

exports.logout = function (req, res) {
  req.logout();
  res.redirect('/login');
};

/**
 * Session
 */

exports.session = login;

/**
 * Login
 */

function login (req, res) {
  const redirectTo = req.session.returnTo
    ? req.session.returnTo
    : '/';
  delete req.session.returnTo;
  res.redirect(redirectTo);
}