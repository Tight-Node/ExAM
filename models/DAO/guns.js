var mongoose = require('mongoose'),
  Gun = require('../guns');
// _gun = new Gun();

function GunDAO() {}

GunDAO.prototype.readAllGuns = function() {
  this._gun = 'what?';
  var self = this;
  var _gun = Gun.findOne({}).exec(function(err, res) {
    // console.log('oi?'+res);
    // console.log(res.brand);
    // self._gun = res;
    return res;
  });
  return _gun;
}

module.exports = GunDAO;
