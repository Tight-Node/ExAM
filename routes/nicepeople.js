var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router({
    caseSensitive: false,
    strict: true
  });

var NicepeopleDAO = require('../models/DAO/nicepeopleDAO'),
  nicepeopleDAO = new NicepeopleDAO();

/* GET people listing. */
router.get('/', function(req, res) {
  // nicepeopleDAO.read({}, function(err, niceones) {
    res.render('nicepeople/list', {
      // nicepeople: niceones,
      nicepeople: {},
      title: "Go to this route (nicepeople are sleeping now..) http://localhost:4000/armory"
    });
  // })
});

module.exports = router;
