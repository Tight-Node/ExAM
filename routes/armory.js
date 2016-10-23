var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router({
    caseSensitive: false,
    strict: true
  });

var GunDAO = require('../models/DAO/gunsDAO'),
  gunDAO = new GunDAO();

router.get('/', function(req, res) {
  gunDAO.readAll(function(err, guns) {
    res.render('armory/list', {
      guns: guns,
      title: 'Guns',
    });
  })
});

router.get('/pistols/:brand?', function(req, res) {
  // console.log(req.params.brand);
  gunDAO.readPistols(req.params,function(err, guns) {
    console.log(guns);
    res.render('armory/list', {
      guns: guns,
      title: 'Pistols',
    });
  })
});

router.get('/smgs', function(req, res) {
  gunDAO.readSMGs(function(err, guns) {
    res.render('armory/list', {
      guns: guns,
      title: 'SMG\'s',
    });
  })
});

router.get('/shotguns', function(req, res) {
  gunDAO.readShotguns(function(err, guns) {
    res.render('armory/list', {
      guns: guns,
      title: 'Shotguns',
    });
  })
});

module.exports = router;
