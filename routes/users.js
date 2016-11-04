var express = require('express'),
    router = express.Router({
        caseSensitive: false,
        strict: false
    });

var UserDAO = require('../models/DAO/userDAO');
userDAO = new UserDAO();

router.get('/list/:name.first?', function(req, res) {
    var userProt = require('../models/user');
    var user = new userProt();
    const options = {};
    console.log(req.params);
    userDAO.read(req.params, options, function(err, users) {
        if (!err) {
            res.render('users/list', {
                users: users,
                title: 'Gerador',
            });
        } else {
            res.send(err);
        }
    });
});

router.get('/list/:name.first?/:name.last?/:age?/:email?/:created?', function(req, res) {
    var userProt = require('../models/user');
    var user = new userProt();
    const options = {};
    userDAO.read(req.params, options, function(err, users) {
        if (!err) {
            res.render('users/list', {
                users: users,
                title: 'Gerador',
            });
        } else {
            res.send(err);
        }
    });
});

router.post('/remove', function(req, res) {
    userDAO.delete(req.body, {},
        function(err, result) {
            res.redirect('/users/list');
        });
});

router.get('/modify-form/:_id', function(req, res) {
    userDAO.readOne(req.params, {}, function(err, user) {
        if (!err) {
            res.render('users/form', {
                user: user,
            });
        } else {
            res.send(err);
        }
    });
});

router.get('/create',
    function(req, res) {
        res.render('users/form');
    });

router.post('/modify-apply', function(req, res) {
    userDAO.change(req.body, {},
        function(err, result) {
            res.redirect('/users/list');
            // res.send(req.body);
        });
});

module.exports = router;
