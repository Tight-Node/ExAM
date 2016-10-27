var router = require('express')
    .Router({
        caseSensitive: false,
        strict: true
    });

router.get('/', function(req, res) {
    res.render('index/index', {
        title: 'Stay frosty and alert, matey!'
    });
});

router.get('/404-error', function(req, res) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('partials/errors/404', {
        message: err.message,
        error: err
    });
});

router.get('/partials/:controller/:action', function(req, res) {
    var controller = req.params.controller;
    var action = req.params.action;
    res.render('partials/' + controller + '/' + action);
});

module.exports = router;
