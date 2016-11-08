var Car = require('../car-model');

function CarDAO() {

}

CarDAO.prototype.read = function(paramVal, cb) {
    if (Object.keys(paramVal).length) {
        var query = {};
        for (p in paramVal) {
            if (paramVal[p] != undefined) query[p] = paramVal[p];
        }
        var cars = Car.find(query).exec(cb);
        return cars;
    }
    var cars = Car.find({}).exec(cb);
    console.log(cars);
    return cars;
};

CarDAO.prototype.readOne = function(cb) {
    return Car.findOne().exec(cb);
};

module.exports = CarDAO;
