var express = require('express'),
    router = express.Router({
        caseSensitive: false,
        strict: false
    });

var UserDAO = require('../models/DAO/userDAO');
userDAO = new UserDAO();

router.get('/:name.first?/:name.last?/:age?/:email?/:created?', function(req, res) {
    userDAO.read(req.params, function(err, users) {
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
    console.log('we\'re on optional / router');
    userDAO.read({}, function(err, users) {
        res.render('users/list', {
            users: users,
            title: 'Gerador - Users',
        });
    });
});

module.exports = router;
