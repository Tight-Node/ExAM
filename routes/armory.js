var express = require('express'),
    router = express.Router({
        caseSensitive: false,
        strict: true
    });

var dbConn = require('../libs/DBConnector');
var conn = new dbConn();
conn.getConnection('alongDWay');

var GunDAO = require('../models/DAO/gunDAO'),
    gunDAO = new GunDAO();

// var Gun = require('../models/gun');

// var Gunproto = require('../models/gunproto');
// var Gun = new Gunproto();

var Gunes = require('../models/gunes');
var Gun = new Gunes;

Gun.setBrand('porra!');
console.log('getBrand method: ', Gun.getBrand());
// Gun.__id = 'merda!';
// console.log('__id value: ',Gun.__id);
// console.log('_id value: ', Gun._id);
// console.log(Object.getOwnPropertyDescriptor(Gun, "_id"));
// console.log('Prop. desc. ', Object.getOwnPropertyDescriptor(Gun, "__id"));
// console.log(Object.getOwnPropertyNames(Gun));

router.get('/:category?/:brand?/:caliber?/:serie?', function(req, res) {
    // gunDAO.read(req.params, function(err, guns) {
    res.render('armory/list', {
        guns: {},
        title: 'Guns',
    });
    // })
});

router.get('/', function(req, res) {
    // console.log('we\'re on optional / router');
    // gunDAO.read({}, function(err, guns) {
    res.render('armory/list', {
        guns: {},
        title: 'Guns',
    });
    // })
});

module.exports = router;
