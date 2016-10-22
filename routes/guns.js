var express = require('express'),
    assert = require('assert'),
    mongoose = require('mongoose'),
    router = express.Router({
        caseSensitive: false,
        strict: true
    });

// mongoose.connect('mongodb://localhost:27017/users');
// mongoose.connect('mongodb://localhost/guns');

var Gun = require('../models/guns'),
    gun = new Gun();

/* GET people listing. */
router.get('/', function(req, res) {
    // person.getEmails(function(err, guns) {
    gun.readAllGuns(function(err, guns) {
        res.render('guns/list', {
            guns: guns,
            title: 'Guns'
        });
    })
});

module.exports = router;
