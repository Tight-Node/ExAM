var mongoose = require('mongoose'),
    DBConn = require('../libs/DBConnector'),
    connection = new DBConn().getConnection('alongDWay'),
    Schema = mongoose.Schema;

var carSchema = new Schema({
    "_id": String,
    "brand": String,
    "carmodel": String,
    "category": String,
    "color": String,
    "motor": String,
    "optionals": [String]
}, {
    collection: 'fastcars'
});

var Car = connection.model('car', carSchema);

module.exports = Car;
