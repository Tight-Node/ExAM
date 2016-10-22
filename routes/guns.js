var express = require('express'),
  assert = require('assert'),
  mongoose = require('mongoose'),
  router = express.Router({
    caseSensitive: false,
    strict: true
  });

// mongoose.connect('mongodb://localhost:27017/users');
// mongoose.connect('mongodb://localhost/guns');


/* GET people listing. */
router.get('/', function(req, res) {
  // var Gun = require('../models/guns'),
  //   gun = new Gun();
  var GunDAO = require('../models/DAO/guns'),
    gunDAO = new GunDAO();
  // gun.brand = 'colt';
  // gun.serie = '1911';
  // gun.caliber = '9mm';
  // console.log(gun);
  var guns = gunDAO.readAllGuns();

  // person.getEmails(function(err, guns) {
  // gun.readAllGuns(function(err, guns) {
  res.render('guns/list', {
    guns: JSON.stringify(guns),
    title: 'Guns'
  });
  // })
});

module.exports = router;
