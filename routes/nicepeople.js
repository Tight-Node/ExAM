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
  nicepeopleDAO.read({}, function(err, niceones) {
    console.log('Erro requisição nicepeople: ');
    console.log(err);
    res.render('nicepeople/list', {
      nicepeople: niceones,
      // nicepeople: {},
      title: 'Nice people'
    });
  })
});

module.exports = router;
