const User = require('./user.model');

module.exports = createUser;


  /*
   * Add a new user to the database
   * @param  {Request} req 
   * @param  {Response} res 
   */
  
function createUser(req, res) {
  return User.create({
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullName,
    email: req.body.email
  });
}
