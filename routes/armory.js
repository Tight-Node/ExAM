var express = require('express'),
    router = express.Router({
        caseSensitive: false,
        strict: false
    });


// var Gun = require('../models/gun');
// var gun = new Gun();
// gun.setBrand('Colt');
// console.log(gun.getBrand());

// var DAO = require('../models/DAO/DAOPat');
// console.log(DAO);

var GunDAO = require('../models/DAO/gunDAO');
gunDAO = new GunDAO();

// gunDAO.create(gun);


router.get('/:category?/:brand?/:caliber?/:serie?', function(req, res) {
    // gunDAO.read(req.params, function(err, guns) {
    res.render('armory/list', {
        guns: {},
        title: 'Guns',
    });
    // })
});

router.get('/', function(req, res) {
    // gunDAO.read({}, function(err, guns) {
    res.render('armory/list', {
        guns: {},
        title: 'Guns',
    });
    // })
});

module.exports = router;
