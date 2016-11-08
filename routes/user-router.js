var express = require('express'),
    util = require('util'),
    mongoose = require('mongoose'),
    router = express.Router({
        caseSensitive: false,
        strict: true
    });

var UserDAO = require('../models/DAO/user-dao'),
    userDAO = new UserDAO();

router.get('/', function(req, res) {
    // userDAO.readAll({}, function(err, users) {
    userDAO.reading({}, function(err, users) {
        console.log('from user routers');
        console.log(util.inspect(users, {
            depth: null,
            colors: true
        }));
        res.render('user/list', {
            users: users,
            title: 'GENERATOR',
        });
        // res.send(JSON.stringify(users, null, null));
    })
});

module.exports = router;
