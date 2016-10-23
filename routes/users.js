var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router({
    caseSensitive: false,
    strict: true
  });

var PersonDAO = require('../models/DAO/usersDAO'),
  personDAO = new PersonDAO();

/* GET people listing. */
router.get('/', function(req, res) {
  personDAO.readAll(function(err, users) {
    res.render('users/list', {
      users: users,
      title: 'Users'
    });
  })
});

module.exports = router;
