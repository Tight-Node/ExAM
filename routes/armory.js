var express = require('express'),
    router = express.Router({
        caseSensitive: false,
        strict: false
    });

var GunDAO = require('../models/DAO/gunDAO');
gunDAO = new GunDAO();

router.get('/:category?/:brand?/:caliber?/:serie?', function(req, res) {
    gunDAO.read(req.params, function(err, guns) {
        res.render('armory/list', {
            guns: guns,
            title: 'Guns',
        });
    });
});

router.get('/', function(req, res) {
    console.log('we\'re on optional / router');
    gunDAO.read({}, function(err, guns) {
        res.render('armory/list', {
            guns: guns,
            title: 'Guns',
        });
    });
});

module.exports = router;
