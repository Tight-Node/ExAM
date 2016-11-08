var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router({
        caseSensitive: false,
        strict: true
    });

var CarModel = require('../models/car-model'),
    carModel = new CarModel();

router.get('/:category?/:brand?/:carmodel?/:motor?/:serie?', function(req, res) {
    carModel.read(req.params, function(err, cars) {
        res.render('car/list', {
            cars: cars,
            title: ' --- Generator --- ',
        });
    });
});

router.get('/', function(req, res) {
    console.log('on root route');
    carModel.read({}, function(err, cars) {
        console.log(cars);
        res.render('car/list', {
            cars: cars,
            title: ' --- Generator --- ',
        });
    });
});

router.get('/list', function(req, res) {
    // console.log('we\'re on optional / router');
    // carModel.read({}, function(err, cars) {
    //     res.render('car/list', {
    //         cars: cars,
    //         title: ' --- Generator --- ',
    //     });
    // });
});

module.exports = router;
