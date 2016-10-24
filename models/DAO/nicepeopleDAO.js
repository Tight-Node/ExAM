var Nicepeople = require('../nicepeople');

function NicepeopleDAO() {

}

NicepeopleDAO.prototype.read = function(paramVal, cb) {
  if (Object.keys(paramVal).length) {
    var query = {};
    for (p in paramVal) {
      if (paramVal[p] != undefined) query[p] = paramVal[p];
    }
    var nicery = Nicepeople.find(query).exec(cb);
    return nicery;
  }
  // var result = Nicepeople.find({}).exec(cb);

  // return result;
  return {};
};

module.exports = NicepeopleDAO;
