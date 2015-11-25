/**
 * TO DO
 */

module.exports = {
  db: process.env.MONGOHQ_URL,
  facebook: {
    clientID: process.env.FACEBOOK_CLIENTID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: ''
  }
};