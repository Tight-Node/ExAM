var mongoose = require('mongoose'),
    DBConn = require('../libs/DBConnector'),
    connection = new DBConn().getConnection('alongDWay'),
    Schema = mongoose.Schema;

mongoose.Promise = Promise;

var userSchema = new Schema({
    "name": {
        "first": String,
        "last": {
            type: String,
            trim: true
        }
    },
    "email": String,
    "age": {
        type: Number,
        min: 0
    },
    "skills": [String],
    "created": {
        "$date": {
            type: Date,
            default: Date.now
        }
    },
    "logins": [{
        "at": {
            "$date": Date
        },
        "minutes": Number
    }]
}, {
    collection: 'users'
});

var User = connection.model('users', userSchema);

module.exports = User;
