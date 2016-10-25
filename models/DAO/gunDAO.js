var Gun = require('../gun');

function GunDAO() {

}

GunDAO.prototype.read = function(paramVal, cb) {
    // if (Object.keys(paramVal).length) {
    //     var query = {};
    //     for (p in paramVal) {
    //         if (paramVal[p] != undefined) query[p] = paramVal[p];
    //     }
    //     var gunner = Gun.find(query).exec(cb);
    //     return gunner;
    // }
    // return Gun.find({}).exec(cb);
    return {};
};

GunDAO.prototype.readOne = function(cb) {
    // return Gun.findOne().exec(cb);
};

module.exports = GunDAO;
