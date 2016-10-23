var Gun = require('../guns');

function GunDAO() {

}

GunDAO.prototype.readAll = function(cb) {
  return Gun.find()
  // .where('category').equals('pistol')xc
  // .select({
  //   "_id": Number,
  //   "brand": String,
  //   "category": String,
  //   "serie": String,
  //   "caliber": String,
  //   "ammos": [String]
  // })
  .exec(cb);
};

GunDAO.prototype.readOne = function(cb) {
  return Gun.findOne().exec(cb);
};

GunDAO.prototype.readPistols = function(params, cb) {
  return Gun.find({
    'category': 'pistol'
  }).exec(cb);
};

GunDAO.prototype.readSMGs = function(cb) {
  return Gun.find({
    'category': 'smg'
  }).exec(cb);
};
GunDAO.prototype.readShotguns = function(cb) {
  return Gun.find({
    'category': 'shotgun'
  }).exec(cb);
};

module.exports = GunDAO;
