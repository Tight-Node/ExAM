var express = require('express'),
    router = express.Router({
        caseSensitive: false,
        strict: false
    });

var UserDAO = require('../models/DAO/userDAO');
userDAO = new UserDAO();

router.get('/:name.first?/:name.last?/:age?/:email?/:created?', function(req, res) {
    userDAO.read(req.params, {}, function(err, users) {
        if (!err) {
            res.render('users/list', {
                users: users,
                title: 'Gerador - Users',
            });
        } else {
            res.send(err);
        }
    });
});

router.get('/', function(req, res) {
    userDAO.read({}, {}, function(err, users) {
        res.render('users/list', {
            users: users,
            title: 'Gerador - Users',
        });
    });
});

router.post('/remove', function(req, res) {
    userDAO.delete(req.body, {},
        function(err, result) {
            res.redirect('/users');
        });
});

module.exports = router;
