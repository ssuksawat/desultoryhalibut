const bcrypt = require('bcrypt');

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




// timeConverter: function (UNIX_timestamp){
//   var a = new Date(UNIX_timestamp * 1000);
//   var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//   var year = a.getFullYear();
//   var month = months[a.getMonth()];
//   var date = a.getDate();
//   var hour = a.getHours();
//   var min = a.getMinutes();
//   var sec = a.getSeconds();
//   var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//   return time;
// }