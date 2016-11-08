var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router({
        caseSensitive: false,
        strict: true
    });

var CarDAO = require('../models/DAO/car-dao'),
    carDAO = new CarDAO();

router.get('/:category?/:brand?/:motor?/:serie?', function(req, res) {
    carDAO.read(req.params, function(err, cars) {
        res.render('car/list', {
            cars: cars,
            title: 'GENERATORS',
        });
    })
});

router.get('/', function(req, res) {
    console.log('we\'re on optional / router');
    carDAO.read({}, function(err, cars) {
        res.render('car/list', {
            cars: cars,
            title: 'GENERATORS',
        });
    })
});

module.exports = router;
