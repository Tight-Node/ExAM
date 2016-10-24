var Car = require('../car');

function CarDAO() {

}

CarDAO.prototype.read = function(paramVal, cb) {
    if (Object.keys(paramVal).length) {
        var query = {};
        for (p in paramVal) {
            if (paramVal[p] != undefined) query[p] = paramVal[p];
        }
        var gunner = Car.find(query).exec(cb);
        return gunner;
    }
    return Car.find({}).exec(cb);
};

CarDAO.prototype.readOne = function(cb) {
    return Car.findOne().exec(cb);
};

module.exports = CarDAO;
