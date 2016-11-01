var express = require('express'),
    router = express.Router({
        caseSensitive: false,
        strict: false
    });

var UserDAO = require('../models/DAO/userDAO');
userDAO = new UserDAO();

router.get('/list/:name.first?/:name.last?/:age?/:email?/:created?', function(req, res) {
    userDAO.read(req.params, {}, function(err, users) {
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

router.get('/list', function(req, res) {
    userDAO.read({}, {}, function(err, users) {
        res.render('users/list', {
            users: users,
            title: 'Gerador',
        });
    });
});

router.post('/remove', function(req, res) {
    userDAO.delete(req.body, {},
        function(err, result) {
            res.redirect('/users/list');
        });
});

router.post('/modify', function(req, res) {
    userDAO.change(req.body, {},
        function(err, result) {
            res.redirect('/users/list');
        });
});

module.exports = router;
