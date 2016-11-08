var User = require('../user-model');

/**
 *
 */
function UserDAO() {

}

/**
 *
 */
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
    console.log('users: ');
    console.log(users);
    return users;
};

/**
 *
 */
UserDAO.prototype.readAll = function(paramVal, cb) {
    var result = User.find({})
        .then(users => cb(null, users));
    // .exec(cb);
    console.log('result: ');
    console.log(result);
    return result;
};

/**
 *
 */
UserDAO.prototype.reading = function(paramVal, cb) {
    User.find({})
        .then(users => cb(null, users))
        .catch(err => cb(err, null));
};

module.exports = UserDAO;
