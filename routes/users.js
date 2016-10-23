var express = require('express'),
  // assert = require('assert'),
  mongoose = require('mongoose'),
  router = express.Router({
    caseSensitive: false,
    strict: true
  });

var PersonDAO = require('../models/DAO/usersDAO'),
  personDAO = new PersonDAO();

/* GET people listing. */
router.get('/', function(req, res) {
  // personDAO.getEmails(function(err, users) {
  personDAO.readAll(function(err, users) {
    // Person.readAll(function(err, users) {
    res.render('users/list', {
      users: users,
      title: 'Users',
      // appleBee: (appleBee | '..woops..')
    });
  })
});

module.exports = router;
