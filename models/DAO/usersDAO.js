var User = require('../users');

function UserDAO() {

}

UserDAO.prototype.readAll = function(cb) {
  return User.find().exec(cb);
};

module.exports = UserDAO;
