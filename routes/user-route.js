var express = require('express'),
    router = express.Router({
        caseSensitive: false,
        strict: false
    }),
    UserDAO = require('../models/DAO/user-dao'),
    userDAO = new UserDAO();

router.get("/list/:_id?/:namefirst?/:namelast?/:email?/:age?", function(req, res) {
    var userProt = require('../models/user-model');
    var user = new userProt();
    // load the user object
    user.setNameFirst(req.params.namefirst || /.*/);
    user.setNameLast(req.params.namelast || /.*/);
    user.setEmail(req.params.email || /.*/);
    user.setAge(req.params.age || /.*/);
    // options to be applied
    const options = {};
    userDAO.read(user, options, function(err, users) {
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
