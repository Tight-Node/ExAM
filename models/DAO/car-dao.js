/**
 * @file
 */
var Car = require('../car-model');

/**
 * @class CarDAO
 */
class CarDAO {

    constructor(car) {
        this.car = car;
    }

    read() {
        this.car.findOne({
            username: username
        }).exec();
    }
}
//
// CarDAO.prototype.read = function(paramVal, cb) {
//     if (Object.keys(paramVal).length) {
//         var query = {};
//         for (p in paramVal) {
//             if (paramVal[p] != undefined) query[p] = paramVal[p];
//         }
//         var users = Car.find(query).exec(cb);
//         return users;
//     }
//     var users = Car.find({}).exec(cb);
//     console.log(users);
//     return users;
// };
//
// CarDAO.prototype.readOne = function(cb) {
//     return Car.findOne().exec(cb);
// };

module.exports = CarDAO;
