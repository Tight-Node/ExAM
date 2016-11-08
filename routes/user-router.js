var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router({
        caseSensitive: false,
        strict: true
    });

var UserDAO = require('../models/DAO/user-dao'),
    userDAO = new UserDAO();

router.get('/:category?/:brand?/:motor?/:serie?', function(req, res) {
    userDAO.read(req.params, function(err, users) {
        res.render('user/list', {
            users: users,
            title: 'E-mails generator',
        });
    })
});

router.get('/', function(req, res) {
    console.log('we\'re on optional / router');
    userDAO.read({}, function(err, users) {
        res.render('user/list', {
            users: users,
            title: ' --- E-mails generator --- ',
        });
    })
});

router.delete('/delete/:_id', function(req, res) {
    console.log('we\'re on /delete/:_id route');
    userDAO.read({}, function(err, users) {
        res.render('user/list', {
            users: users,
        });
    })
});

module.exports = router;
