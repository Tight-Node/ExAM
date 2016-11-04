var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router({
        caseSensitive: false,
        strict: true
    });

var GunDAO = require('../models/DAO/gunsDAO'),
    gunDAO = new GunDAO();


router.get('/:category?/:brand?/:caliber?/:serie?', function(req, res) {
    gunDAO.read(req.params, function(err, guns) {
        res.render('armory/list', {
            guns: guns,
            title: 'E-mails generator',
        });
    })
});

router.get('/', function(req, res) {
    console.log('we\'re on optional / router');
    gunDAO.read({}, function(err, guns) {
        res.render('armory/list', {
            guns: guns,
            title: 'E-mails generator.',
        });
    })
});

module.exports = router;
