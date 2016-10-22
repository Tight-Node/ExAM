var express = require('express'),
    // assert = require('assert'),
    mongoose = require('mongoose'),
    router = express.Router({
        caseSensitive: false,
        strict: true
    });

// mongoose.createConnection('mongodb://localhost/users');
// mongoose.connect('mongodb://localhost:27017/users');
// mongoose.connect('mongodb://localhost/users');

var Person = require('../models/users')
,person = new Person()
    ;

/* GET people listing. */
router.get('/', function(req, res) {
    // person.getEmails(function(err, users) {
    person.readAll(function(err, users) {
    // Person.readAll(function(err, users) {
        res.render('users/list', {
            users: users,
            title: 'Users',
            // appleBee: (appleBee | '..woops..')
        });
    })
});

module.exports = router;
