var User = require('../user-model');

function UserDAO() {

}

UserDAO.prototype.read = function(paramVal, cb) {
    if (Object.keys(paramVal).length) {
        var query = {};
        for (p in paramVal) {
            if (paramVal[p] != undefined) query[p] = paramVal[p];
        }
        var users = User.find(query).exec(cb);
        return users;
    }
    var users = User.find({}).exec(cb);
    console.log(users);
    return users;
};

UserDAO.prototype.readOne = function(cb) {
    return User.findOne().exec(cb);
};

module.exports = UserDAO;
