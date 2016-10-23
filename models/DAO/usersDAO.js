var User = require('../users'),
  DBConn = require('../../libs/DBConnector'),
  connection = new DBConn().getConnection('users');

function UserDAO() {

}

UserDAO.prototype.readAll = function(cb) {
  // return connection.model(User).find().exec(cb);
  // return connection.model(User).find().exec(cb);
  return [{"brand":"Colt","serie":"1911","caliber":"9mm","ammos":["Special","Ogival","Penetrator"]}];
};

module.exports = UserDAO;
