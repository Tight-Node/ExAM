var express = require('express'),
    router = express.Router({
        caseSensitive: false,
        strict: false
    });

var GunDAO = require('../models/DAO/gunDAO');
gunDAO = new GunDAO();

router.get('/:category?/:brand?/:caliber?/:serie?', function(req, res, next) {
    next();
}, function(req, res) {
    gunDAO.read(req.params, function(err, guns) {
        res.render('armory/list', {
            guns: guns,
            title: 'Guns',
        });
    });
});

router.get('/', function(req, res) {
    gunDAO.read({}, function(err, guns) {
        res.render('armory/list', {
            guns: {},
            title: 'Guns',
        });
    })
});

module.exports = router;
