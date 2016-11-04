var mongoose = require('mongoose'),
    DBConn = require('../libs/DBConnector'),
    connection = new DBConn().getConnection('alongDWay'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    "_id": String,
    "brand": String,
    "category": String,
    "color": String,
    "motor": String,
    "optionals": [String]
}, {
    collection: 'cars'
});

var User = connection.model('user', userSchema);

module.exports = User;
