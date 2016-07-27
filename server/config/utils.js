const bcrypt = require('bcrypt');
const Promise = require('bluebird').Promise;
Promise.promisifyAll(bcrypt, { context: bcrypt });

module.exports = {
  comparePassword,
  hashPassword
};


/**
 * generate salt and hash a plaintext password
 * @param  {string} password  the plaintext password to be salted and hashed
 */
function hashPassword(password) {
  return bcrypt.genSaltAsync(10)
  .then(salt => bcrypt.hashAsync(password, salt));
}


/**
 * use bcrypt to verify if a plaintext password matches a salted and hashed version
 * @param  {string} plaintext  the password entered by the user in the input
 * @param  {string} hash       the salted and hashed password for the user from the DB
 * @return {boolean}
 */
function comparePassword(plaintext, hash) {
  return bcrypt.Async(plaintext, hash);
}
