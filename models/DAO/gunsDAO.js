var Gun = require('../guns');

function GunDAO() {

}

GunDAO.prototype.read = function(params, cb) {
  console.log('We\'re in gunDAOf',params);
  if (params.length) {
    var query = {};
    for (p in params) {
      //     // console.log("'" + p + "'");
      //     // console.log("'" + params[p] + "'");
      //     // gunning.where("'" + p + "'").equals("Colt");
      //     // gunning.where('brand').equals("Colt");
      query.push({
        p: {
          // $regex: /params[p]/i
          params
        }
      });
    }
    var gunning = Gun.find(query);
    return gunning.exec(cb);
  }
  // console.log(query.length);
  return Gun.find({}).exec(cb);
};

GunDAO.prototype.readOne = function(cb) {
  return Gun.findOne().exec(cb);
};

GunDAO.prototype.readPistols = function(params, cb) {
  var gunning = null;
  if (params.length) {
    gunning = Gun.find({
      'category': 'pistol'
    });
    for (p in params) {
      // console.log("'" + p + "'");
      // console.log("'" + params[p] + "'");
      // gunning.where("'" + p + "'").equals("Colt");
      gunning.where('brand').equals("Colt");
    }
    gunning.exec(cb);
  }
  return gunning;
};

// GunDAO.prototype.readPistols = function(params, cb) {
//   var gunning = null;
//   if (params.brand.length) {
//     gunning = Gun.find({
//       'category': 'pistol'
//     });
//     for (p in params) {
//       console.log("'" + p + "'");
//       console.log("'" + params[p] + "'");
//       // gunning.where("'" + p + "'").equals("'" + params[p] + "'");
//       gunning.where("brand").equals("Colt");
//     }
//     gunning.exec(cb);
//   }
//   return gunning;
// };

// GunDAO.prototype.readPistols = function(params, cb) {
//
// return Gun.find({
//   'category': 'pistol'
// }).exec(cb);
// };

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
