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

carSchema.methods.read = function(cb) {
    console.log('on read method from car');
    var res = Car.find({}).exec(cb);
    console.log(res);
    return res;
}

var Car = connection.model('fastcars', carSchema);

// Car.prototype.read = function(cb) {
//     console.log('on read method from car');
//     var res = Car.find({}).exec(cb);
//     console.log(res);
//     return res;
// }

// Carrier = new Car();

module.exports = Car;
